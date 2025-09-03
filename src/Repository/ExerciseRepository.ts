import { ExerciseDto } from "../Dtos/ExerciseDtos.js";
import { ExerciseEntity } from "../Entity/ExerciseEntity.js";
import prisma from "../lib/prisma.js";
export interface IExerciseRepository {
  createExercise(data: ExerciseDto): Promise<ExerciseEntity>;
  updateExercise(
    data: Partial<ExerciseDto>,
    Exerciseid: string
  ): Promise<ExerciseEntity>;
  getExercise(): Promise<ExerciseEntity[]>;
  getExerciseById(ExerciseId: string): Promise<ExerciseEntity | null>;
  deleteExercise(Exerciseid: string): Promise<void>;
}
export class ExerciseRepository implements IExerciseRepository {
  async createExercise(data: ExerciseDto): Promise<ExerciseEntity> {
    const create = await prisma.exercise.create({
      data: {
        exerciseName: data.exerciseName,
        description: data.description,
        category: data.category,
        Hints: data.Hints,
        Breathing: data.Breathing,
        videoUrl: data.videoUrl,
        thumbnailUrl: data.thumbnailUrl,
        imageUrl: data.imageUrl,
        caloriesBurnedPerRep: data.caloriesBurnedPerRep,
        isPremium: data.isPremium,
      },
    });
    return create as ExerciseEntity;
  }
  async updateExercise(
    data: Partial<ExerciseDto>,
    Exerciseid: string
  ): Promise<ExerciseEntity> {
    const update = await prisma.exercise.update({
      where: { id: Exerciseid },
      data: {
        ...data,
      },
    });
    return update;
  }
  async getExercise(): Promise<ExerciseEntity[]> {
    const get = await prisma.exercise.findMany({});
    return get;
  }
  async deleteExercise(Exerciseid: string): Promise<void> {
    await prisma.exercise.delete({
      where: { id: Exerciseid },
    });
  }
  async getExerciseById(ExerciseId: string): Promise<ExerciseEntity | null> {
    const getExercise = await prisma.exercise.findFirst({
      where: { id: ExerciseId },
    });
    return getExercise;
  }
}
