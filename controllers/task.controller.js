const TaskModel = require("../models/task.model");

const postTask = async (req, res) => {
  try {
    const { responsable, description } = req.body;
    let postedTask = await TaskModel.create(
      {
        responsable,
        description,
      },
      {
        fields: ["responsable", "description"],
      }
    );
    if (postedTask) {
      return res.status(201).json({
        success: "Tarea creada con éxito",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};

const getTasks = async (req, res) => {
  try {
    let gotTasks = await TaskModel.findAll();
    res.status(200).json(gotTasks);
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};

const getTask = async (req, res) => {
  let { id } = req.params;
  let currentTaks = await TaskModel.findOne({
    where: {
      id,
    },
  });
  if (currentTaks) {
    try {
      let { id } = req.params;
      let gotTask = await TaskModel.findOne({
        where: {
          id,
        },
      });
      res.status(200).json(gotTask);
    } catch (error) {
      res.status(500).json({
        error: error,
      });
    }
  } else {
    res.status(404).json({
      error: `Tarea no existe`,
    });
  }
};

const patchTask = async (req, res) => {
  let { id } = req.params;
  let currentTaks = await TaskModel.findOne({
    where: {
      id,
    },
  });
  if (currentTaks) {
    try {
      let { responsable, description } = req.body;
      let updatedTask = await currentTaks.update({
        responsable,
        description,
      });
      res.status(201).json({
        success: "Tarea actualizada con éxito",
      });
    } catch (error) {
      res.status(500).json({
        error: error,
      });
    }
  } else {
    res.status(404).json({
      error: `Tarea no existe`,
    });
  }
};

const deleteTask = async (req, res) => {
  let { id } = req.params;
  let currentTaks = await TaskModel.findOne({
    where: {
      id,
    },
  });
  if (currentTaks) {
    try {
      await TaskModel.destroy({
        where: {
          id,
        },
      });
      res.status(200).json({
        success: "Tarea eliminada con éxito",
      });
    } catch (error) {
      res.status(500).json({
        error: error,
      });
    }
  } else {
    res.status(404).json({
      error: `Tarea no existe`,
    });
  }
};

const deleteTasks = async (req, res) => {
  let gotTasks = await TaskModel.findAll();
  if (gotTasks.length > 0) {
    try {
      gotTasks.forEach(async ({ id }) => {
        await TaskModel.destroy({
          where: {
            id,
          },
        });
      });
      res.status(200).json({
        success: "Tareas eliminadas con éxito",
      });
    } catch (error) {
      res.status(500).json({
        error: error,
      });
    }
  } else {
    res.status(404).json({
      error: `No hay tareas creadas`,
    });
  }
};

module.exports = {
  postTask,
  getTask,
  getTasks,
  patchTask,
  deleteTask,
  deleteTasks,
};
