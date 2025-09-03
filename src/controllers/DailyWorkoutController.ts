import { Request, Response } from "express";
import { DailyWorkoutDto } from "../Dtos/dailyWorkoutDtos.js";
import { DailyWorkoutUsecase } from "../UseCase/DailyWorkoutUsecase.js";
import { WorkoutDailyRepository } from "../Repository/DailyWorkoutRepository.js";
const dailyworkoutRepository = new WorkoutDailyRepository();
const dailyworkoutusecase = new DailyWorkoutUsecase(dailyworkoutRepository);

export class DailyWorkoutController {
  async createDailyWorkout(req: Request, res: Response) {
    try {
      const dailywork: DailyWorkoutDto = req.body;
      const createWorkout = await dailyworkoutusecase.createDailyWorkout(
        dailywork
      );
      res.status(201).json(createWorkout);
    } catch (error) {
      console.error("Error during create DailyWorkout:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async updateDailyWorkout(req: Request, res: Response) {
    try {
      const dailywork: DailyWorkoutDto = req.body;
      const { dailyWorkoutId } = await req.params;
      const updateWorkout = await dailyworkoutusecase.updateDailyWorkout(
        dailywork,
        dailyWorkoutId
      );
      res.status(201).json(updateWorkout);
    } catch (error) {
      console.error("Error during update DailyWorkout:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async getAllDailyWorkout(req: Request, res: Response) {
    try {
      const getDailyWorkout = await dailyworkoutusecase.getAllWorkout();
      res.status(201).json(getDailyWorkout);
    } catch (error) {
      console.error("Error during Get All DailyWorkout:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async getDailyWorkoutId(req: Request, res: Response) {
    try {
      const { dailyWorkoutId } = req.params;
      const getDailyWorkoutId = await dailyworkoutusecase.GetWorkoutById(
        dailyWorkoutId
      );
      res.status(201).json(getDailyWorkoutId);
    } catch (error) {
      console.error("Error during Get  DailyWorkoutId:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async DeleteWorkoutPlan(req: Request, res: Response) {
    try {
      const { dailyWorkoutId } = req.params;
      const DeleteDailyWorkout = await dailyworkoutusecase.DeleteWorkout(
        dailyWorkoutId
      );
      res.status(201).json(DeleteDailyWorkout);
    } catch (error) {
      console.error("Error during Delete workout:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
