import { FitnessController } from "../controllers/fitnessController.js";
import { AuthMiddleware } from "../middleware/authMiddleware.js";
import { Router } from "express";
const router = Router();
const fitnessController = new FitnessController();
router.post("/create", AuthMiddleware, fitnessController.create);
router.put("/update", AuthMiddleware, fitnessController.update);
router.get("/get", AuthMiddleware, fitnessController.get);
export default router;
