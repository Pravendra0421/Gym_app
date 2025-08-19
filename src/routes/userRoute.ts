import { Router } from "express";
import { AuthMiddleware } from "../middleware/authMiddleware";
import { UserControllers } from "../controllers/userController";
const router = Router();
const userController = new UserControllers();
router.post("/user", AuthMiddleware, userController.createUser);
// router.post("/user", userController.createUser); //this is only for backend testing
export default router;
