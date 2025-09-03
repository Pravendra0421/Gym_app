import { IExerciseRepository } from "../Repository/ExerciseRepository.js";
import { ExerciseDto } from "../Dtos/ExerciseDtos.js";
import { ExerciseEntity } from "../Entity/ExerciseEntity.js";

export class ExerciseUsecases {
  constructor(private exerciseRepository: IExerciseRepository) {}
  async createExercise(data: ExerciseDto): Promise<ExerciseEntity> {
    const Exercise = await this.exerciseRepository.createExercise(data);
    return Exercise;
  }
  async updateExercise(
    data: Partial<ExerciseDto>,
    ExerciseId: string
  ): Promise<ExerciseEntity> {
    const updateExercise = await this.exerciseRepository.updateExercise(
      data,
      ExerciseId
    );
    return updateExercise;
  }
  async getAllExercise(): Promise<ExerciseEntity[]> {
    const getExercise = await this.exerciseRepository.getExercise();
    return getExercise;
  }
  async getExerciseById(ExerciseId: string): Promise<ExerciseEntity> {
    const getExercise = await this.exerciseRepository.getExerciseById(
      ExerciseId
    );
    return getExercise;
  }
  async deleteExercise(ExerciseId: string): Promise<void> {
    const deleteExercise = await this.exerciseRepository.deleteExercise(
      ExerciseId
    );
    return deleteExercise;
  }
}
