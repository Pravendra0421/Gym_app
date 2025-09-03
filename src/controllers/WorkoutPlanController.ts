import { WorkoutPlanRepository } from "../Repository/WorkoutPlanRepository.js";
import { WorkoutPlanDto } from "../Dtos/WorkoutPlanDtos.js";
import { workoutPlanUsecase } from "../UseCase/WorkoutPlanUsecase.js";
import { Request, Response } from "express";

const workoutplanRepository = new WorkoutPlanRepository();
const workoutplanusecase = new workoutPlanUsecase(workoutplanRepository);

export class WorkoutPlanController {
  async createWorkoutPlan(req: Request, res: Response) {
    try {
      const workoutPlanDto: WorkoutPlanDto = req.body;
      const create = await workoutplanusecase.createWorkout(workoutPlanDto);
      res.status(201).json(create);
    } catch (error) {
      console.log("error during the create workoutPlan", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async updateWorkoutPlan(req: Request, res: Response) {
    try {
      const workoutPlanDto: WorkoutPlanDto = req.body;
      const { workoutPlanId } = req.params;
      const update = await workoutplanusecase.updateWorkout(
        workoutPlanDto,
        workoutPlanId
      );
      res.status(201).json(update);
    } catch (error) {
      console.log("error during the update workoutPlan", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async getAllWorkoutPlan(req: Request, res: Response) {
    try {
      const getAllworkout = await workoutplanusecase.getAllWorkoutPlan();
      res.status(201).json(getAllworkout);
    } catch (error) {
      console.log("error during the getAll workoutPlan", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getWorkoutPlan(req: Request, res: Response) {
    try {
      const { workoutPlanId } = req.params;
      const get = await workoutplanusecase.getWorkoutPlan(workoutPlanId);
      res.status(201).json(get);
    } catch (error) {
      console.log("error during the get workoutPlan", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async DeleteWorkoutPlan(req: Request, res: Response) {
    try {
      const { workoutPlanId } = req.params;
      const get = await workoutplanusecase.deleteWorkoutPlan(workoutPlanId);
      res.status(201).json(get);
    } catch (error) {
      console.log("error during the delete workoutPlan", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
