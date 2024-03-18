const express = require("express")
const taskController = require('../controller/task');
const router = express.Router()
router.post('/task',taskController.createTask);
router.get("/task",taskController.getAllTask);
router.get("/task/:name",taskController.getTask);
router.put("/task/:name",taskController.replaceTask);
router.patch("/task/:title",taskController.updateTask);
// router.patch("/task/:id",taskController.updateTaskById);
router.delete("/task/:name",taskController.deleteTask);

exports.router = router;
