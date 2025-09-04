import { MainWorkoutplanDto } from "../Dtos/MainWorkoutPlanDtos.js";
import { MainWorkoutplanEntity } from "../Entity/MainWorkoutplanEntity.js";
import { MainWorkoutPlanRepository } from "../Repository/MainWorkoutPlanRepository.js";
export class MainWorkoutPlanUsecase {
  constructor(private MainWorkoutPlanRepository: MainWorkoutPlanRepository) {}
  async createMainPlanUsecase(
    data: MainWorkoutplanDto,
    fitnessCategoryId: string
  ): Promise<MainWorkoutplanEntity> {
    const create = await this.MainWorkoutPlanRepository.createMainWorkoutPlan(
      data,
      fitnessCategoryId
    );
    return create;
  }
  async updateMainPlanUsecase(
    data: MainWorkoutplanDto,
    mainWorkoutPlanId: string
  ): Promise<MainWorkoutplanEntity> {
    const update = await this.MainWorkoutPlanRepository.updateMainWorkoutPlan(
      data,
      mainWorkoutPlanId
    );
    return update;
  }
  async getMainPlanUsecase(
    mainWorkoutPlanId: string
  ): Promise<MainWorkoutplanEntity> {
    const get = await this.MainWorkoutPlanRepository.getbyIdMainWorkoutPlan(
      mainWorkoutPlanId
    );
    return get;
  }
  async getAllMainPlanUsecase(): Promise<MainWorkoutplanEntity[]> {
    const get = await this.MainWorkoutPlanRepository.getAllMainWorkoutPlan();
    return get;
  }
  async deleteMainPlanUsecase(mainWorkoutPlanId: string): Promise<void> {
    const deleteFitness =
      await this.MainWorkoutPlanRepository.deleteMainWorkoutPlan(
        mainWorkoutPlanId
      );
    return deleteFitness;
  }
}
