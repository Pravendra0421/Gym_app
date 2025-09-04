import { Router } from "express";
import { MainWorkoutPlanController } from "../controllers/MainWorkoutPlanController.js";
const routerController = new MainWorkoutPlanController();
const router = Router();
router.post("/:fitnessCategoryId", routerController.createMainworkoutPlan);
router.put("/:mainworkoutplanId", routerController.updateMainworkoutPlan);
router.get("/getAll", routerController.getAllMainworkoutPlan);
router.get("/:mainworkoutplanId", routerController.getByIdMainworkoutPlan);
router.delete(
  "/:mainworkoutplanId",
  routerController.DeleteByIdMainworkoutPlan
);
export default router;
