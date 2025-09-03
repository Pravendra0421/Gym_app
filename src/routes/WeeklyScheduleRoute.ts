import { WeeklySchduleController } from "../controllers/WeeklyScheduleController.js";
import Router from "express";
const router = Router();
const routerController = new WeeklySchduleController();

router.post("/:WorkoutPlanId", routerController.createWeeklySchdule);
router.put("/:weeklyScheduleId", routerController.updateWeeklySchedule);
router.get("/getAll", routerController.getAllWeeklySchedule);
router.get("/:weeklyScheduleId", routerController.getWeeklySchedule);
router.delete("/:weeklyScheduleId", routerController.DeleteWeeklySchedule);
export default router;
