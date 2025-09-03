import { IDailyWorkoutExerciseRepository } from "../Repository/dailyWorkoutExerciseRepository.js";
import { dailyWorkoutExerciseDto } from "../Dtos/dailyWorkoutExerciseDtos.js";
import { dailyWorkoutExerciseEntity } from "../Entity/dailyWorkoutExerciseEntity.js";

export class DailyWorkoutExerciseusecase {
  constructor(private dailyworkoutExercise: IDailyWorkoutExerciseRepository) {}
  async createDailyeExercise(
    data: dailyWorkoutExerciseDto,
    dailyWorkoutId: string
  ): Promise<dailyWorkoutExerciseEntity> {
    const create = this.dailyworkoutExercise.createDailyExercise(
      data,
      dailyWorkoutId
    );
    return create;
  }
  async updateDailyExercise(
    data: dailyWorkoutExerciseDto,
    dailyWorkoutId: string
  ): Promise<dailyWorkoutExerciseEntity> {
    const update = this.dailyworkoutExercise.updateDailyExercise(
      data,
      dailyWorkoutId
    );
    return update;
  }
  async getAllDailyExercises(): Promise<dailyWorkoutExerciseEntity[]> {
    const getAll = this.dailyworkoutExercise.getAllDailyWorkoutExercise();
    return getAll;
  }
  async getDailyExercises(
    dailyWorkoutExerciseId: string
  ): Promise<dailyWorkoutExerciseEntity> {
    const get = this.dailyworkoutExercise.getDailyWorkoutExercise(
      dailyWorkoutExerciseId
    );
    return get;
  }
  async deleteDailyworkoutExercise(
    dailyWorkoutExerciseId: string
  ): Promise<void> {
    const deleteworkoutExercise =
      this.dailyworkoutExercise.deleteDailyWorkoutExercise(
        dailyWorkoutExerciseId
      );
    return deleteworkoutExercise;
  }
}
