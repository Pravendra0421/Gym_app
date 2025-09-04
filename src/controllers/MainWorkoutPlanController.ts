import { MainWorkoutplanDto } from "../Dtos/MainWorkoutPlanDtos.js";
import { MainWorkoutPlanUsecase } from "../UseCase/MainWorkoutPlanUsecase.js";
import { MainWorkoutPlanRepository } from "../Repository/MainWorkoutPlanRepository.js";
import { Request, Response } from "express";
const mainWorkoutPlanRepository = new MainWorkoutPlanRepository();
const mainWorkoutPlanusecase = new MainWorkoutPlanUsecase(
  mainWorkoutPlanRepository
);
export class MainWorkoutPlanController {
  async createMainworkoutPlan(req: Request, res: Response) {
    try {
      const data: MainWorkoutplanDto = req.body;
      const { fitnessCategoryId } = req.params;
      const create = await mainWorkoutPlanusecase.createMainPlanUsecase(
        data,
        fitnessCategoryId
      );
      res.status(201).json(create);
    } catch (error) {
      console.log("error during the create main Plan", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async updateMainworkoutPlan(req: Request, res: Response) {
    try {
      const data: MainWorkoutplanDto = req.body;
      const { mainworkoutplanId } = req.params;
      const update = await mainWorkoutPlanusecase.updateMainPlanUsecase(
        data,
        mainworkoutplanId
      );
      res.status(201).json(update);
    } catch (error) {
      console.log("error during the create main Plan", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async getAllMainworkoutPlan(req: Request, res: Response) {
    try {
      const GetAll = await mainWorkoutPlanusecase.getAllMainPlanUsecase();
      res.status(201).json(GetAll);
    } catch (error) {
      console.log("error during the GetAll main Plan", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async getByIdMainworkoutPlan(req: Request, res: Response) {
    try {
      const { mainworkoutplanId } = req.params;
      const getByid = await mainWorkoutPlanusecase.getMainPlanUsecase(
        mainworkoutplanId
      );
      res.status(201).json(getByid);
    } catch (error) {
      console.log("error during the create main Plan", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async DeleteByIdMainworkoutPlan(req: Request, res: Response) {
    try {
      const { mainworkoutplanId } = req.params;
      const DeleteById = await mainWorkoutPlanusecase.deleteMainPlanUsecase(
        mainworkoutplanId
      );
      res.status(201).json(DeleteById);
    } catch (error) {
      console.log("error during the Delete main Plan", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
