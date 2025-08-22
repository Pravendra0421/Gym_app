import { Router } from "express";
import { AuthMiddleware } from "../middleware/authMiddleware";
import { LifeStyleController } from "../controllers/lifeStyleHabitsController";

const router = Router();
const lifestyleController = new LifeStyleController();
router.post("/create", AuthMiddleware, lifestyleController.create);
router.put("/update", AuthMiddleware, lifestyleController.update);
router.get("/get", AuthMiddleware, lifestyleController.get);
export default router;
