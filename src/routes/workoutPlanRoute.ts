import { Router } from "express";
import { WorkoutPlanController } from "../controllers/WorkoutPlanController.js";

const router = Router();
const routerController = new WorkoutPlanController();
router.post("/create", routerController.createWorkoutPlan);
router.put("/:workoutPlanId", routerController.updateWorkoutPlan);
router.get("/getAll", routerController.getAllWorkoutPlan);
router.get("/:workoutPlanId", routerController.getWorkoutPlan);
router.delete("/:workoutPlanId", routerController.DeleteWorkoutPlan);
export default router;
