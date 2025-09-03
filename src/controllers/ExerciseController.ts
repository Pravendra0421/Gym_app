import { Request, Response } from "express";
import { ExerciseUsecases } from "../UseCase/ExerciseUsecase.js";
import { ExerciseRepository } from "../Repository/ExerciseRepository.js";
import { ExerciseDto } from "../Dtos/ExerciseDtos.js";

const exerciseRepository = new ExerciseRepository();
const exerciseUSecase = new ExerciseUsecases(exerciseRepository);

export class ExerciseController {
  async createExercise(req: Request, res: Response) {
    try {
      const exerciseData: ExerciseDto = req.body;
      const createExercise = await exerciseUSecase.createExercise(exerciseData);
      res.status(201).json(createExercise);
    } catch (error) {
      console.error("Error during create Exercise:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async updateExercise(req: Request, res: Response) {
    try {
      const exerciseData: ExerciseDto = req.body;
      const { exerciseId } = req.params;
      const updateExercise = await exerciseUSecase.updateExercise(
        exerciseData,
        exerciseId
      );
      res.status(201).json(updateExercise);
    } catch (error) {
      console.error("Error during update Exercise:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async getAllExercise(req: Request, res: Response) {
    try {
      const getAllExercise = await exerciseUSecase.getAllExercise();
      res.status(201).json(getAllExercise);
    } catch (error) {
      console.error("Error during get all the exercise", error);
      res.status(500).json({ message: "Internal server Error" });
    }
  }
  async getExerciseById(req: Request, res: Response) {
    try {
      const { exerciseId } = req.params;
      const getExerciseById = await exerciseUSecase.getExerciseById(exerciseId);
      res.status(201).json(getExerciseById);
    } catch (error) {
      console.error("Error during get exercise by id");
      res.status(500).json({ message: "Internal server Error" });
    }
  }
  async DeleteExercise(req: Request, res: Response) {
    try {
      const { exerciseId } = req.params;
      const DeleteExercise = await exerciseUSecase.deleteExercise(exerciseId);
      res.status(201).json(DeleteExercise);
    } catch (error) {
      console.error("Error during Delete exercise");
      res.status(500).json({ message: "Internal server Error" });
    }
  }
}
