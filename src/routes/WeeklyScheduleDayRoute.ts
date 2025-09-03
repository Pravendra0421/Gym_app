import { WeeklyScheduleDayController } from "../controllers/WeeklyScheduleDayController.js";
import { Router } from "express";
const router = Router();
const routerController = new WeeklyScheduleDayController();
router.post("/:weeklyScheduleId", routerController.createScheduleDayController);
router.put(
  "/:weeklyScheduleDayId",
  routerController.updateScheduleDayController
);
router.get("/:weeklyScheduleDayId", routerController.getScheduleDayController);
router.delete(
  "/:weeklyScheduleDayId",
  routerController.DeleteScheduleDayController
);
export default router;
