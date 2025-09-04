import { MainWorkoutplanDto } from "../Dtos/MainWorkoutPlanDtos.js";
import { MainWorkoutplanEntity } from "../Entity/MainWorkoutplanEntity.js";
import prisma from "../lib/prisma.js";
export interface IMainWorkoutPlanRepository {
  createMainWorkoutPlan(
    data: MainWorkoutplanDto,
    fitnessCategoryId: string
  ): Promise<MainWorkoutplanEntity>;
  updateMainWorkoutPlan(
    data: Partial<MainWorkoutplanDto>,
    id: string
  ): Promise<MainWorkoutplanEntity>;
  getbyIdMainWorkoutPlan(id: string): Promise<MainWorkoutplanEntity>;
  deleteMainWorkoutPlan(id: string): Promise<void>;
  getAllMainWorkoutPlan(): Promise<MainWorkoutplanEntity[]>;
}
export class MainWorkoutPlanRepository implements IMainWorkoutPlanRepository {
  async createMainWorkoutPlan(
    data: MainWorkoutplanDto,
    fitnessCategoryId: string
  ): Promise<MainWorkoutplanEntity> {
    const create = await prisma.mainWorkoutPlan.create({
      data: {
        ...data,
        fitnessCategoryId: fitnessCategoryId,
      },
    });
    return create as MainWorkoutplanEntity;
  }
  async updateMainWorkoutPlan(
    data: MainWorkoutplanDto,
    id: string
  ): Promise<MainWorkoutplanEntity> {
    const update = await prisma.mainWorkoutPlan.update({
      where: { id: id },
      data: {
        ...data,
      },
    });
    return update as MainWorkoutplanEntity;
  }
  async getAllMainWorkoutPlan(): Promise<MainWorkoutplanEntity[]> {
    const getAll = await prisma.mainWorkoutPlan.findMany({});
    return getAll as MainWorkoutplanEntity[];
  }
  async getbyIdMainWorkoutPlan(id: string): Promise<MainWorkoutplanEntity> {
    const getById = await prisma.mainWorkoutPlan.findFirst({
      where: { id: id },
    });
    return getById as MainWorkoutplanEntity;
  }
  async deleteMainWorkoutPlan(id: string): Promise<void> {
    await prisma.mainWorkoutPlan.delete({
      where: { id: id },
    });
  }
}
