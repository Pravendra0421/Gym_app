import { WorkoutPlanDto } from "../Dtos/WorkoutPlanDtos.js";
import { WorkoutPlanEntity } from "../Entity/WorkoutPlanEntity.js";
export interface IWorkoutPlanRepository {
  createWorkoutPlan(data: WorkoutPlanDto): Promise<WorkoutPlanEntity>;
  updateWorkoutPlan(
    data: Partial<WorkoutPlanDto>,
    Id: string
  ): Promise<WorkoutPlanEntity>;
  getWorkoutPlanByid(Id: string): Promise<WorkoutPlanEntity>;
  getAllWorkoutPlan(): Promise<WorkoutPlanEntity[]>;
  deleteWorkoutPlan(Id: string): Promise<void>;
}
export class WorkoutPlanRepository implements IWorkoutPlanRepository {
  async createWorkoutPlan(data: WorkoutPlanDto): Promise<WorkoutPlanEntity> {
    const createWorkoutPlan = await prisma.workoutPlan.create({
      data: {
        name: data.name,
        durationInWeeks: data.durationInWeeks,
        difficulty: data.difficulty,
        isPremium: data.isPremium,
      },
    });
    return createWorkoutPlan;
  }
  async updateWorkoutPlan(
    data: Partial<WorkoutPlanDto>,
    Id: string
  ): Promise<WorkoutPlanEntity> {
    const updateWorkoutPlan = await prisma.workoutPlan.update({
      where: { id: Id },
      data: {
        ...data,
      },
    });
    return updateWorkoutPlan;
  }
  async getWorkoutPlanByid(Id: string): Promise<WorkoutPlanEntity> {
    const getWorkoutById = await prisma.workoutPlan.findFirst({
      where: { id: Id },
    });
    return getWorkoutById;
  }
  async getAllWorkoutPlan(): Promise<WorkoutPlanEntity[]> {
    const getAllWorkoutPlan = await prisma.workoutPlan.findMany({});
    return getAllWorkoutPlan;
  }
  async deleteWorkoutPlan(Id: string): Promise<void> {
    await prisma.workoutPlan.delete({
      where: { id: Id },
    });
  }
}
