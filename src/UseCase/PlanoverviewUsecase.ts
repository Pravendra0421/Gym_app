import { PlanOverviewDtos } from "../Dtos/PlanOverviewDtos.js";
import { PlanOverviewEntity } from "../Entity/PlanOverviewEntity.js";
import { IPlanOverviewRepository } from "../Repository/PlanOverviewRepository.js";
export class PlanOverviewusecase {
  constructor(private planoverviewRepository: IPlanOverviewRepository) {}
  async createPlanoverview(
    data: PlanOverviewDtos,
    mainWorkoutPlanId: string
  ): Promise<PlanOverviewEntity> {
    const create = await this.planoverviewRepository.createPlanOverview(
      data,
      mainWorkoutPlanId
    );
    return create;
  }
  async updatePlanoverview(
    data: PlanOverviewDtos,
    PlanoverviewId: string
  ): Promise<PlanOverviewEntity> {
    const update = await this.planoverviewRepository.updatePlanoverview(
      data,
      PlanoverviewId
    );
    return update;
  }
  //   async getPlanOverview(PlanoverviewId: string): Promise<PlanOverviewEntity> {
  //     const get = await this.planoverviewRepository.getPlanOverview(
  //       PlanoverviewId
  //     );
  //     return get;
  //   }
  async getAllPlanoverview(
    mainWorkoutPlanId: string
  ): Promise<PlanOverviewEntity[]> {
    const getAll = await this.planoverviewRepository.getAllPlanOverview(
      mainWorkoutPlanId
    );
    return getAll;
  }
  async DeletePlanoverview(PlanoverviewId: string): Promise<void> {
    const Delete = await this.planoverviewRepository.deletePlanOverview(
      PlanoverviewId
    );
    return Delete;
  }
}
