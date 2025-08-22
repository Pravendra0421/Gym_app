import { FitnessController } from "../controllers/fitnessController";
import { AuthMiddleware } from "../middleware/authMiddleware";
import { Router } from "express";
const router = Router();
const fitnessController = new FitnessController();
router.post("/create", AuthMiddleware, fitnessController.create);
router.put("/update", AuthMiddleware, fitnessController.update);
router.get("/get", AuthMiddleware, fitnessController.get);
export default router;
