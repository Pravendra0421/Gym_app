import { WorkoutPlanDto } from "../Dtos/WorkoutPlanDtos.js";
import { WorkoutPlanEntity } from "../Entity/WorkoutPlanEntity.js";
import { IWorkoutPlanRepository } from "../Repository/WorkoutPlanRepository.js";
export class workoutPlanUsecase {
  constructor(private WorkoutPlanRepository: IWorkoutPlanRepository) {}
  async createWorkout(data: WorkoutPlanDto): Promise<WorkoutPlanEntity> {
    const create = await this.WorkoutPlanRepository.createWorkoutPlan(data);
    return create;
  }
  async updateWorkout(
    data: WorkoutPlanDto,
    workoutPlanId: string
  ): Promise<WorkoutPlanEntity> {
    const update = await this.WorkoutPlanRepository.updateWorkoutPlan(
      data,
      workoutPlanId
    );
    return update;
  }
  async getWorkoutPlan(workoutPlanId: string): Promise<WorkoutPlanEntity> {
    const get = await this.WorkoutPlanRepository.getWorkoutPlanByid(
      workoutPlanId
    );
    return get;
  }
  async getAllWorkoutPlan(): Promise<WorkoutPlanEntity[]> {
    const getAll = await this.WorkoutPlanRepository.getAllWorkoutPlan();
    return getAll;
  }
  async deleteWorkoutPlan(workoutPlanId: string): Promise<void> {
    const deletePlan = await this.WorkoutPlanRepository.deleteWorkoutPlan(
      workoutPlanId
    );
    return deletePlan;
  }
}
