const Task = require("../model/Task");

// get all tasks

const getAllTasks = async (req, res) => {
  try {
    let tasks = await Task.find();
    if (tasks.length === 0)
      return res.status(404).json({
        success: false,
        message: "no tasks found",
      });
    res.status(200).json({
      success: true,
      message: "task found",
      tasks,
      count: tasks.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "task not found",
      error: `${error.message}`,
    });
  }
};

// get a task

const getTask = async (req, res) => {
  try {
    let id = { _id: req.params.id };
    let task = await Task.findOne(id);
    if (!task)
      return res.status(404).json({
        success: false,
        message: "task not found",
      });

    res.status(200).json({
      success: true,
      message: "task found",
      task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "task not found",
      error: `${error.message}`,
    });
  }
};

// create task

const createTask = async (req, res) => {
  try {
    let task = await req.body;
    let create = await Task.create(task);

    if (!create)
      return res.status(400).json({
        success: false,
        message: "Task creation failed",
      });

    return res.status(201).json({
      success: true,
      message: "Task creation successful",
      task: create,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "task not created",
      error: `${error.message}`,
    });
  }
};

// update task
const updateTask = async (req, res) => {
  try {
    let id = { _id: req.params.id };
    let task = await req.body;
    let update = await Task.findOneAndUpdate(id, task, { new: true });

    if (!update)
      return res.status(400).json({
        success: false,
        message: "task not updated",
      });

    return res.status(201).json({
      success: true,
      message: "task updated",
      task: update,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "task not updated",
      error: `${error.message}`,
    });
  }
};

// delete task
const deleteTask = async (req, res) => {
  try {
    let id = { _id: req.params.id };
    let deleted = await Task.findOneAndRemove(id);

    if (!deleted)
      return res.status(400).json({
        success: false,
        message: "task not deleted",
      });

    return res.status(200).json({
      success: true,
      message: "task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "task not deleted",
      error: `${error.message}`,
    });
  }
};

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
