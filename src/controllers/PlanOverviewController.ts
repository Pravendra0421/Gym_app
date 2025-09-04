import { PlanOverviewDtos } from "../Dtos/PlanOverviewDtos.js";
import { PlanOverviewRepository } from "../Repository/PlanOverviewRepository.js";
import { PlanOverviewusecase } from "../UseCase/PlanoverviewUsecase.js";
import { Request, Response } from "express";
const planoverviewRepository = new PlanOverviewRepository();
const PlanoverviewUsecase = new PlanOverviewusecase(planoverviewRepository);
export class PlanOverviewController {
  async createPlanOverview(req: Request, res: Response) {
    try {
      const data: PlanOverviewDtos = req.body;
      const { mainWorkoutPlanId } = req.params;
      const create = await PlanoverviewUsecase.createPlanoverview(
        data,
        mainWorkoutPlanId
      );
      res.status(201).json(create);
    } catch (error) {
      console.log("error during the create PlanOverview", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async updatePlanOverview(req: Request, res: Response) {
    try {
      const data: PlanOverviewDtos = req.body;
      const { PlanOverviewId } = req.params;
      const update = await PlanoverviewUsecase.updatePlanoverview(
        data,
        PlanOverviewId
      );
      res.status(201).json(update);
    } catch (error) {
      console.log("error during the update PlanOverview", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async getAllPlanOverview(req: Request, res: Response) {
    try {
      const { mainWorkoutPlanId } = req.params;
      const get = await PlanoverviewUsecase.getAllPlanoverview(
        mainWorkoutPlanId
      );
      res.status(201).json(get);
    } catch (error) {
      console.log("error during the get PlanOverview", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  //   async getPlanOverview(req: Request, res: Response) {
  //     try {
  //       const { PlanOverviewId } = req.params;
  //       console.log(PlanOverviewId);
  //       const get = await PlanoverviewUsecase.getPlanOverview(PlanOverviewId);
  //       res.status(201).json(get);
  //     } catch (error) {
  //       console.log("error during the get PlanOverview", error);
  //       res.status(500).json({ message: "Internal Server Error" });
  //     }
  //   }

  async DeletePlanOverview(req: Request, res: Response) {
    try {
      const { PlanOverviewId } = req.params;
      const Delete = await PlanoverviewUsecase.DeletePlanoverview(
        PlanOverviewId
      );
      res.status(201).json(Delete);
    } catch (error) {
      console.log("error during the get PlanOverview", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
