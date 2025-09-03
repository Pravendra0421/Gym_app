import { WeeklyScheduleDto } from "../Dtos/WeeklyScheduleDtos.js";
import { WeeklyScheduleUSecase } from "../UseCase/WeeklyScheduleUsecase.js";
import { WeeklyScheduleRepository } from "../Repository/WeeklyScheduleRepository.js";
import { Request, Response } from "express";

const weeklyScheduleResposiory = new WeeklyScheduleRepository();
const weeklyScheduleusecase = new WeeklyScheduleUSecase(
  weeklyScheduleResposiory
);

export class WeeklySchduleController {
  async createWeeklySchdule(req: Request, res: Response) {
    try {
      const data: WeeklyScheduleDto = req.body;
      const { WorkoutPlanId } = req.params;
      const weeklySchdule = await weeklyScheduleusecase.createWeekly(
        data,
        WorkoutPlanId
      );
      res.status(201).json(weeklySchdule);
    } catch (error) {
      console.log("error during the create weeklyschedule", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async updateWeeklySchedule(req: Request, res: Response) {
    try {
      const data: WeeklyScheduleDto = req.body;
      const { weeklyScheduleId } = req.params;
      const weeklySchdule = await weeklyScheduleusecase.updateWeekly(
        data,
        weeklyScheduleId
      );
      res.status(201).json(weeklySchdule);
    } catch (error) {
      console.log("error during the update weeklyschedule", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async getWeeklySchedule(req: Request, res: Response) {
    try {
      const { weeklyScheduleId } = req.params;
      const weeklySchdule = await weeklyScheduleusecase.getWeeklySchedule(
        weeklyScheduleId
      );
      res.status(201).json(weeklySchdule);
    } catch (error) {
      console.log("error during the get weeklyschedule", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async getAllWeeklySchedule(req: Request, res: Response) {
    try {
      const weeklySchdule = await weeklyScheduleusecase.getAllWeeklySchedule();
      res.status(201).json(weeklySchdule);
    } catch (error) {
      console.log("error during the getAll weeklyschedule", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async DeleteWeeklySchedule(req: Request, res: Response) {
    try {
      const { weeklyScheduleId } = req.params;
      const weeklySchdule = await weeklyScheduleusecase.deleteWeeklySchedule(
        weeklyScheduleId
      );
      res.status(201).json(weeklySchdule);
    } catch (error) {
      console.log("error during the delete weeklyschedule", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
