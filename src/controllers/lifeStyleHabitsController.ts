import { LifeStyleUsecase } from "../UseCase/lifeStyleHabitsUsecase";
import { LifeStyleHabitsDto } from "../Dtos/lifeStyleHabits.Dtos";
import { LifeStyleRepository } from "../Repository/lifeStyleHabitsRepository";
import { USerRepository } from "../Repository/userRepository";
import { Request, Response } from "express";
const userRepository = new USerRepository();
const lifeStyleRepository = new LifeStyleRepository();
const lifeStyleUsecase = new LifeStyleUsecase(
  lifeStyleRepository,
  userRepository
);
export class LifeStyleController {
  async create(req: Request, res: Response) {
    try {
      const data: LifeStyleHabitsDto = req.body;
      const firebaseuid = req.User.uid;
      if (!firebaseuid) {
        return res.status(404).json({
          success: false,
          message: "user is not logged in",
        });
      }
      const newLifeStyle = await lifeStyleUsecase.createLifeStyle(
        data,
        firebaseuid
      );
      return res.status(201).json(newLifeStyle);
    } catch (error) {
      console.error("Error creating lifeStyle:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async update(req: Request, res: Response) {
    try {
      const data: LifeStyleHabitsDto = req.body;
      const firebaseUid = req.User.uid;
      if (!firebaseUid) {
        return res.status(404).json({
          success: false,
          message: "token is invalid",
        });
      }
      const updateLifeStyle = await lifeStyleUsecase.updateLifeStyle(
        data,
        firebaseUid
      );
      return res.status(201).json(updateLifeStyle);
    } catch (error) {
      console.error("Error update lifeStyle:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async get(req: Request, res: Response) {
    try {
      const firebaseUid = req.User.uid;
      if (!firebaseUid) {
        return res.status(404).json({
          success: false,
          message: "token is invalid",
        });
      }
      const get = await lifeStyleUsecase.getLifeStyle(firebaseUid);
      return res.status(201).json(get);
    } catch (error) {
      console.error("Error get LifeStyle", error);
      res.status(500).json({
        message: "Internal server Error",
      });
    }
  }
}
