import { dailyWorkoutExerciseDto } from "./../Dtos/dailyWorkoutExerciseDtos.js";
import { DailyWorkoutExerciseRepository } from "../Repository/dailyWorkoutExerciseRepository.js";
import { DailyWorkoutExerciseusecase } from "../UseCase/dailyWorkoutExerciseUsecase.js";
import { Request, Response } from "express";
const dailyworkoutExerciseRepository = new DailyWorkoutExerciseRepository();
const dailyworkoutexerciseUSecase = new DailyWorkoutExerciseusecase(
  dailyworkoutExerciseRepository
);
export class dailyworkoutExerciseController {
  async createDailyExerciseController(req: Request, res: Response) {
    try {
      const dailyWorkoutExercise: dailyWorkoutExerciseDto = req.body;
      const { dailyWorkoutId } = req.params;
      const create = await dailyworkoutexerciseUSecase.createDailyeExercise(
        dailyWorkoutExercise,
        dailyWorkoutId
      );
      res.status(201).json(create);
    } catch (error) {
      console.log("error during the create dailyworkoutexercise", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async updateDailyExerciseController(req: Request, res: Response) {
    try {
      const dailyWorkoutExercise: dailyWorkoutExerciseDto = req.body;
      const { dailyWorkoutExerciseId } = req.params;
      const create = await dailyworkoutexerciseUSecase.updateDailyExercise(
        dailyWorkoutExercise,
        dailyWorkoutExerciseId
      );
      res.status(201).json(create);
    } catch (error) {
      console.log("error during the update dailyworkoutexercise", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async GetByIdDailyExerciseController(req: Request, res: Response) {
    try {
      const { dailyWorkoutExerciseId } = req.params;
      const getById = await dailyworkoutexerciseUSecase.getDailyExercises(
        dailyWorkoutExerciseId
      );
      res.status(201).json(getById);
    } catch (error) {
      console.log("error during the getById dailyworkoutexercise", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async GetAllDailyWorkoutExerciseController(req: Request, res: Response) {
    try {
      const getAll = await dailyworkoutexerciseUSecase.getAllDailyExercises();
      res.status(201).json(getAll);
    } catch (error) {
      console.log("error during the getAll dailyworkoutexercise", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async DeleteDailyWorkoutExerciseController(req: Request, res: Response) {
    try {
      const { dailyWorkoutExerciseId } = req.params;
      const deleteWorkoutExercise =
        await dailyworkoutexerciseUSecase.deleteDailyworkoutExercise(
          dailyWorkoutExerciseId
        );
      res.status(201).json(deleteWorkoutExercise);
    } catch (error) {
      console.log("error during the Delete dailyworkoutexercise", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
