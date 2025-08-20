import { Router } from "express";
import { AuthMiddleware } from "../middleware/authMiddleware.js";
import { UserControllers } from "../controllers/userController.js";
const router = Router();
const userController = new UserControllers();
router.post("/user", AuthMiddleware, userController.createUser);
// router.post("/user", userController.createUser); //this is only for backend testing
export default router;
