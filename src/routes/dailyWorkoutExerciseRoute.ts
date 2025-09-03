import { Router } from "express";
import { dailyworkoutExerciseController } from "../controllers/dailyWorkoutExerciseController.js";
const router = Router();
const routerController = new dailyworkoutExerciseController();
router.post("/:dailyWorkoutId", routerController.createDailyExerciseController);
router.put(
  "/:dailyWorkoutExerciseId",
  routerController.updateDailyExerciseController
);
router.get("/getAll", routerController.GetAllDailyWorkoutExerciseController);
router.get(
  "/:dailyWorkoutExerciseId",
  routerController.GetByIdDailyExerciseController
);
router.delete(
  "/:dailyWorkoutExerciseId",
  routerController.DeleteDailyWorkoutExerciseController
);

export default router;
