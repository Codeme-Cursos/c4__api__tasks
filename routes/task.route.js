const express = require('express');
const {
    postTask,
    getTasks,
    getTask,
    patchTask,
    deleteTask,
    deleteTasks
} = require ('../controllers/task.controller');
const router = express.Router();

router.post('/task', postTask)
router.get('/tasks', getTasks)
router.get('/task/:id', getTask)
router.patch('/task/:id', patchTask)
router.delete('/task/:id', deleteTask)
router.delete('/tasks', deleteTasks)

module.exports = router;