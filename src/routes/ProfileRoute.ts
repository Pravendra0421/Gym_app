import { Router } from "express";
import { AuthMiddleware } from "../middleware/authMiddleware.js";
import { ProfileController } from "../controllers/profileController.js";

const router = Router();
const profileController = new ProfileController();
router.post("/create-profile", AuthMiddleware, profileController.create);
router.get("get-Profile", AuthMiddleware, profileController.getProfile);
router.put("update-profile", AuthMiddleware, profileController.updateProfile);
export default router;
