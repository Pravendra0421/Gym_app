import { DailyWorkoutDto } from "../Dtos/dailyWorkoutDtos.js";
import { DailyWorkoutEntity } from "../Entity/dailyWorkoutEntity.js";
import prisma from "../lib/prisma.js";
export interface IDailyWorkoutRepository {
  createDailyWorkout(data: DailyWorkoutDto): Promise<DailyWorkoutEntity>;
  updateDailyWorkout(
    data: Partial<DailyWorkoutDto>,
    Id: string
  ): Promise<DailyWorkoutEntity>;
  getDailyWorkoutByid(Id: string): Promise<DailyWorkoutEntity>;
  getAllDailyWorkout(): Promise<DailyWorkoutEntity[]>;
  deleteDailyWorkout(Id: string): Promise<void>;
}
export class WorkoutDailyRepository implements IDailyWorkoutRepository {
  async createDailyWorkout(data: DailyWorkoutDto): Promise<DailyWorkoutEntity> {
    const createWorkout = await prisma.dailyWorkout.create({
      data: {
        name: data.name,
        description: data.description,
        estimatedTime: data.estimatedTime,
        TotalCalories: data.TotalCalories,
      },
      include: {
        exercises: true,
      },
    });
    return createWorkout;
  }
  async updateDailyWorkout(
    data: Partial<DailyWorkoutDto>,
    Id: string
  ): Promise<DailyWorkoutEntity> {
    const updateWorkout = await prisma.dailyWorkout.update({
      where: { id: Id },
      data: {
        ...data,
      },
      include: {
        exercises: true,
      },
    });
    return updateWorkout;
  }
  async getDailyWorkoutByid(Id: string): Promise<DailyWorkoutEntity> {
    const getWorkoutById = await prisma.dailyWorkout.findFirst({
      where: { id: Id },
      include: {
        exercises: true,
      },
    });
    return getWorkoutById;
  }
  async getAllDailyWorkout(): Promise<DailyWorkoutEntity[]> {
    const getAllWorkout = await prisma.dailyWorkout.findMany({
      include: {
        exercises: true,
      },
    });
    return getAllWorkout;
  }
  async deleteDailyWorkout(Id: string): Promise<void> {
    await prisma.dailyWorkout.delete({
      where: { id: Id },
    });
  }
}
