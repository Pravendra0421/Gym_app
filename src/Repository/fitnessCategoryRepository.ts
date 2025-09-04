import { FitnessCategoryDtos } from "../Dtos/FitnessCategoryDtos.js";
import { FitnessCategoryEntity } from "../Entity/FitnessCategoryEntity.js";
import prisma from "../lib/prisma.js";
export interface IFitnessCategoryRepository {
  createFitnessCategory(
    data: FitnessCategoryDtos
  ): Promise<FitnessCategoryEntity>;
  updateFitnessCategory(
    data: Partial<FitnessCategoryDtos>,
    id: string
  ): Promise<FitnessCategoryEntity>;
  getAllFitnessCategory(): Promise<FitnessCategoryEntity[]>;
  getbyIdFitnessCategory(id: string): Promise<FitnessCategoryEntity>;
  deleteFitnessCategory(id: string): Promise<void>;
}
export class FitnessCategoryRepository implements IFitnessCategoryRepository {
  async createFitnessCategory(
    data: FitnessCategoryDtos
  ): Promise<FitnessCategoryEntity> {
    const create = await prisma.fitnessCategory.create({
      data: {
        name: data.name,
        description: data.description,
      },
    });
    return create;
  }
  async updateFitnessCategory(
    data: Partial<FitnessCategoryDtos>,
    id: string
  ): Promise<FitnessCategoryEntity> {
    const update = await prisma.fitnessCategory.update({
      where: { id: id },
      data: {
        name: data.name,
        description: data.description,
      },
    });
    return update;
  }
  async getbyIdFitnessCategory(id: string): Promise<FitnessCategoryEntity> {
    const getById = await prisma.fitnessCategory.findFirst({
      where: { id: id },
    });
    return getById as FitnessCategoryEntity;
  }
  async getAllFitnessCategory(): Promise<FitnessCategoryEntity[]> {
    const getAll = await prisma.fitnessCategory.findMany({});
    return getAll;
  }
  async deleteFitnessCategory(id: string): Promise<void> {
    await prisma.fitnessCategory.delete({
      where: { id: id },
    });
  }
}
