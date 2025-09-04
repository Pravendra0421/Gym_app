import { PlanOverviewDtos } from "../Dtos/PlanOverviewDtos.js";
import { PlanOverviewEntity } from "../Entity/PlanOverviewEntity.js";
import prisma from "../lib/prisma.js";
export interface IPlanOverviewRepository {
  createPlanOverview(
    data: PlanOverviewDtos,
    mainworkoutPlanId: string
  ): Promise<PlanOverviewEntity>;
  updatePlanoverview(
    data: Partial<PlanOverviewDtos>,
    id: string
  ): Promise<PlanOverviewEntity>;
  //   getPlanOverview(id: string): Promise<PlanOverviewEntity>;
  getAllPlanOverview(mainWorkoutPlanId: string): Promise<PlanOverviewEntity[]>;
  deletePlanOverview(id: string): Promise<void>;
}
export class PlanOverviewRepository implements IPlanOverviewRepository {
  async createPlanOverview(
    data: PlanOverviewDtos,
    mainworkoutPlanId: string
  ): Promise<PlanOverviewEntity> {
    const create = await prisma.planOverview.create({
      data: {
        ...data,
        mainWorkoutPlanId: mainworkoutPlanId,
      },
    });
    return create;
  }
  async updatePlanoverview(
    data: Partial<PlanOverviewDtos>,
    id: string
  ): Promise<PlanOverviewEntity> {
    const update = await prisma.planOverview.update({
      where: { id: id },
      data: {
        ...data,
      },
    });
    return update;
  }
  //   async getPlanOverview(id: string): Promise<PlanOverviewEntity> {
  //     const get = await prisma.planOverview.findFirst({
  //       where: { id: id },
  //     });
  //     return get as PlanOverviewEntity;
  //   }
  async getAllPlanOverview(
    mainWorkoutPlanId: string
  ): Promise<PlanOverviewEntity[]> {
    const getAll = await prisma.planOverview.findMany({
      where: { mainWorkoutPlanId: mainWorkoutPlanId },
    });
    return getAll;
  }
  async deletePlanOverview(id: string): Promise<void> {
    await prisma.planOverview.delete({
      where: { id: id },
    });
  }
}
