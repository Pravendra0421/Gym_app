import { dailyWorkoutExerciseDto } from "../Dtos/dailyWorkoutExerciseDtos.js";
import { dailyWorkoutExerciseEntity } from "../Entity/dailyWorkoutExerciseEntity.js";
import prisma from "../lib/prisma";

export interface IDailyWorkoutExerciseRepository {
  createDailyExercise(
    data: dailyWorkoutExerciseDto,
    dailyWorkoutId: string
  ): Promise<dailyWorkoutExerciseEntity>;
  updateDailyExercise(
    data: Partial<dailyWorkoutExerciseDto>,
    dailyWorkoutExerciseId: string
  ): Promise<dailyWorkoutExerciseEntity>;
  getAllDailyWorkoutExercise(): Promise<dailyWorkoutExerciseEntity[]>;
  getDailyWorkoutExercise(
    dailyWorkoutExerciseId: string
  ): Promise<dailyWorkoutExerciseEntity>;
  deleteDailyWorkoutExercise(dailyWorkoutExerciseId: string): Promise<void>;
}
export class DailyWorkoutExerciseRepository
  implements IDailyWorkoutExerciseRepository
{
  async createDailyExercise(
    data: dailyWorkoutExerciseDto,
    dailyWorkoutId: string
  ): Promise<dailyWorkoutExerciseEntity> {
    const createDailyWorkout = await prisma.dailyWorkoutExercise.create({
      data: {
        dailyWorkoutId: dailyWorkoutId,
        exerciseId: data.exerciseId,
        sets: data.sets,
        reps: data.reps,
        durationSeconds: data.durationSeconds,
        order: data.order,
      },
      include: {
        exercise: true,
      },
    });
    return createDailyWorkout;
  }
  async updateDailyExercise(
    data: Partial<dailyWorkoutExerciseDto>,
    dailyWorkoutExerciseId: string
  ): Promise<dailyWorkoutExerciseEntity> {
    const updateDailyWorkout = await prisma.dailyWorkoutExercise.update({
      where: { id: dailyWorkoutExerciseId },
      data: {
        exerciseId: data.exerciseId,
        sets: data.sets,
        reps: data.reps,
        durationSeconds: data.durationSeconds,
        order: data.order,
      },
      include: {
        exercise: true,
      },
    });
    return updateDailyWorkout;
  }
  async getDailyWorkoutExercise(
    dailyWorkoutExerciseId: string
  ): Promise<dailyWorkoutExerciseEntity> {
    const getDailyWorkoutExercise = await prisma.dailyWorkoutExercise.findFirst(
      {
        where: { id: dailyWorkoutExerciseId },
        include: {
          exercise: true,
        },
      }
    );
    return getDailyWorkoutExercise;
  }
  async getAllDailyWorkoutExercise(): Promise<dailyWorkoutExerciseEntity[]> {
    const getAll = await prisma.dailyWorkoutExercise.findMany({
      include: {
        exercise: true,
      },
    });
    return getAll;
  }
  async deleteDailyWorkoutExercise(
    dailyWorkoutExerciseId: string
  ): Promise<void> {
    await prisma.dailyWorkoutExercise.delete({
      where: { id: dailyWorkoutExerciseId },
    });
  }
}
