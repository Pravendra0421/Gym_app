import { FitnessCategoryDtos } from "../Dtos/FitnessCategoryDtos.js";
import { FitnessCategoryUsecase } from "../UseCase/FitnessCategoryUsecase.js";
import { FitnessCategoryRepository } from "../Repository/fitnessCategoryRepository.js";
import { Request, Response } from "express";
const fitnessRepository = new FitnessCategoryRepository();
const fitnessusecase = new FitnessCategoryUsecase(fitnessRepository);
export class FitnessCategoryController {
  async createFitnessCategory(req: Request, res: Response) {
    try {
      const data: FitnessCategoryDtos = req.body;
      const create = await fitnessusecase.createFitnessUsecase(data);
      res.status(201).json(create);
    } catch (error) {
      console.log("error during the create FitnessCategory", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async updateFitnessCategory(req: Request, res: Response) {
    try {
      const data: FitnessCategoryDtos = req.body;
      const { fitnessCategoryId } = req.params;
      const update = await fitnessusecase.updateFitnessUsecase(
        data,
        fitnessCategoryId
      );
      res.status(201).json(update);
    } catch (error) {
      console.log("error during the create FitnessCategory", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async getAllFitnessCategory(req: Request, res: Response) {
    try {
      const get = await fitnessusecase.getAllFitnessUsecase();
      res.status(201).json(get);
    } catch (error) {
      console.log("error during the get FitnessCategory", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async getFitnessCategory(req: Request, res: Response) {
    try {
      const { fitnessCategoryId } = req.params;
      const get = await fitnessusecase.getFitnessUsecase(fitnessCategoryId);
      res.status(201).json(get);
    } catch (error) {
      console.log("error during the get FitnessCategory", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async deleteFitnessCategory(req: Request, res: Response) {
    try {
      const { fitnessCategoryId } = req.params;
      const deleteFitness = await fitnessusecase.deleteFitnessUsecase(
        fitnessCategoryId
      );
      res.status(201).json(deleteFitness);
    } catch (error) {
      console.log("error during the delete FitnessCategory", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
