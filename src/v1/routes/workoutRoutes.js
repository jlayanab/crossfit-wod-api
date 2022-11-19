const express = require("express");
const router = express.Router();
const workoutController = require("../../controllers/workoutController");

router
    .get("/", workoutController.getAllWorkouts)
    .get("/:workoutId", workoutController.getOneWorkout)
    .post("/", workoutController.createNewWorkouts)
    .patch("/:workoutId", workoutController.updateOneWorkout)
    .delete("/:workoutId", workoutController.deleteOneWorkout);
    
module.exports = router;