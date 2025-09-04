import { FitnessCategoryDtos } from "../Dtos/FitnessCategoryDtos.js";
import { FitnessCategoryEntity } from "../Entity/FitnessCategoryEntity.js";
import { IFitnessCategoryRepository } from "../Repository/fitnessCategoryRepository.js";

export class FitnessCategoryUsecase {
  constructor(private fitnessCategoryRepository: IFitnessCategoryRepository) {}
  async createFitnessUsecase(
    data: FitnessCategoryDtos
  ): Promise<FitnessCategoryEntity> {
    const create = await this.fitnessCategoryRepository.createFitnessCategory(
      data
    );
    return create;
  }
  async updateFitnessUsecase(
    data: FitnessCategoryDtos,
    fitnessCategoryId: string
  ): Promise<FitnessCategoryEntity> {
    const update = await this.fitnessCategoryRepository.updateFitnessCategory(
      data,
      fitnessCategoryId
    );
    return update;
  }
  async getFitnessUsecase(
    fitnessCategoryId: string
  ): Promise<FitnessCategoryEntity> {
    const get = await this.fitnessCategoryRepository.getbyIdFitnessCategory(
      fitnessCategoryId
    );
    return get;
  }
  async getAllFitnessUsecase(): Promise<FitnessCategoryEntity[]> {
    const get = await this.fitnessCategoryRepository.getAllFitnessCategory();
    return get;
  }
  async deleteFitnessUsecase(fitnessCategoryId: string): Promise<void> {
    await this.fitnessCategoryRepository.deleteFitnessCategory(
      fitnessCategoryId
    );
  }
}
