import { DailyWorkoutDto } from "../Dtos/dailyWorkoutDtos.js";
import { DailyWorkoutEntity } from "../Entity/dailyWorkoutEntity.js";
import { IDailyWorkoutRepository } from "../Repository/DailyWorkoutRepository.js";
export class DailyWorkoutUsecase {
  constructor(private dailyWorkoutRepository: IDailyWorkoutRepository) {}
  async createDailyWorkout(data: DailyWorkoutDto): Promise<DailyWorkoutEntity> {
    const DailyWorkout = await this.dailyWorkoutRepository.createDailyWorkout(
      data
    );
    return DailyWorkout;
  }
  async updateDailyWorkout(
    data: Partial<DailyWorkoutDto>,
    DailyWorkoutId: string
  ): Promise<DailyWorkoutEntity> {
    const updateDailyWorkout =
      await this.dailyWorkoutRepository.updateDailyWorkout(
        data,
        DailyWorkoutId
      );
    return updateDailyWorkout;
  }
  async getAllWorkout(): Promise<DailyWorkoutEntity[]> {
    const getAllWorkout =
      await this.dailyWorkoutRepository.getAllDailyWorkout();
    return getAllWorkout;
  }
  async GetWorkoutById(DailyWorkoutId: string): Promise<DailyWorkoutEntity> {
    const getWorkoutById =
      await this.dailyWorkoutRepository.getDailyWorkoutByid(DailyWorkoutId);
    return getWorkoutById;
  }
  async DeleteWorkout(DailyWorkoutId: string): Promise<void> {
    await this.dailyWorkoutRepository.deleteDailyWorkout(DailyWorkoutId);
  }
}
