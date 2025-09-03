import { WeeklyScheduledayUsecase } from "../UseCase/WeeklyScheduleDayUsecase.js";
import { WeeklyScheduleDayRepository } from "../Repository/WeeklyScheduleDayRepository.js";
import { WeeklyScheduleDayDto } from "../Dtos/WeeklyScheduleDayDtos.js";
import { Request, Response } from "express";

const weeklyScheduledayrepository = new WeeklyScheduleDayRepository();
const weeklyScheduleDayusecase = new WeeklyScheduledayUsecase(
  weeklyScheduledayrepository
);

export class WeeklyScheduleDayController {
  async createScheduleDayController(req: Request, res: Response) {
    try {
      const data: WeeklyScheduleDayDto = req.body;
      const { weeklyScheduleId } = req.params;
      const create = await weeklyScheduleDayusecase.createWeeklyScheduleday(
        data,
        weeklyScheduleId
      );
      res.status(201).json(create);
    } catch (error) {
      console.log("error during the create weeklyscheduleDay", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async updateScheduleDayController(req: Request, res: Response) {
    try {
      const data: WeeklyScheduleDayDto = req.body;
      const { weeklyScheduleDayId } = req.params;
      const update = await weeklyScheduleDayusecase.updateWeeklyScheduleDay(
        data,
        weeklyScheduleDayId
      );
      res.status(201).json(update);
    } catch (error) {
      console.log("error during the update weeklyscheduleDay", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async getScheduleDayController(req: Request, res: Response) {
    try {
      const { weeklyScheduleDayId } = req.params;
      const get = await weeklyScheduleDayusecase.getWeeklyScheduleDay(
        weeklyScheduleDayId
      );
      res.status(201).json(get);
    } catch (error) {
      console.log("error during the get weeklyscheduleDay", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async DeleteScheduleDayController(req: Request, res: Response) {
    try {
      const { weeklyScheduleDayId } = req.params;
      const deleteWeekly =
        await weeklyScheduleDayusecase.deleteWeeklyScheduleDay(
          weeklyScheduleDayId
        );
      res.status(201).json(deleteWeekly);
    } catch (error) {
      console.log("error during the delete weeklyscheduleDay", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
