import { fitnessAssignmentDto } from "../Dtos/fitnessAssignmentDtos.js";
import { fitnessAssignmentEntity } from "../Entity/fitnessAssignmentEntity.js";
import prisma from "../lib/prisma.js";

export interface IFitnessRepository {
  createFitness(
    data: fitnessAssignmentDto,
    userId: string
  ): Promise<fitnessAssignmentEntity>;
  updateFitness(
    data: Partial<fitnessAssignmentDto>,
    userId: string
  ): Promise<fitnessAssignmentEntity>;
  getFitness(userId: string): Promise<fitnessAssignmentEntity>;
}
export class FitnessRepository implements IFitnessRepository {
  async createFitness(
    data: fitnessAssignmentDto,
    userId: string
  ): Promise<fitnessAssignmentEntity> {
    const createFitness = await prisma.fitnessAssignment.create({
      data: {
        prev_workout_experiance: data.prev_workout_experiance,
        self_assessed_fitness: data.self_assessed_fitness,
        self_assessed_activity: data.self_assessed_activity,
        has_knee_pain: data.has_knee_pain,
        squat_reps: data.squat_reps,
        pushup_reps: data.pushup_reps,
        plank_duration_seconds: data.plank_duration_seconds,
        userId: userId,
      },
    });
    return createFitness;
  }

  async updateFitness(
    data: Partial<fitnessAssignmentDto>,
    userId: string
  ): Promise<fitnessAssignmentEntity> {
    const updateFitness = await prisma.fitnessAssignment.update({
      where: { userId },
      data: {
        ...data,
      },
    });
    return updateFitness;
  }
  async getFitness(userId: string): Promise<fitnessAssignmentEntity> {
    const getFitness = await prisma.fitnessAssignment.findFirst({
      where: { userId },
    });
    return getFitness;
  }
}
