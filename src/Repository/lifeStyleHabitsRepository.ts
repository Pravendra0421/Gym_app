import prisma from "../lib/prisma.js";
import { LifeStyleHabitsDto } from "../Dtos/lifeStyleHabits.Dtos.js";
import { LifeStyleHabitEntity } from "../Entity/lifeStyleHabitsEntity.js";

export interface ILifeStyleRepository {
  create(
    data: LifeStyleHabitsDto,
    userId: string
  ): Promise<LifeStyleHabitEntity>;
  update(
    data: Partial<LifeStyleHabitsDto>,
    userId: string
  ): Promise<LifeStyleHabitEntity>;
  get(userId: string): Promise<LifeStyleHabitEntity>;
}

export class LifeStyleRepository implements ILifeStyleRepository {
  async create(
    data: LifeStyleHabitsDto,
    userId: string
  ): Promise<LifeStyleHabitEntity> {
    const createLifeStyle = await prisma.lifeStyleHabits.create({
      data: {
        userId: userId,
        daily_walk_duration: data.daily_walk_duration,
        bad_habits: data.bad_habits,
        lifestyle_satisfaction: data.lifestyle_satisfaction,
        sleep_duration_hours: data.sleep_duration_hours,
        wake_up_difficulty: data.wake_up_difficulty,
        morning_feeling: data.morning_feeling,
        stress_frequency: data.stress_frequency,
        wants_health_improvement: data.wants_health_improvement,
        wants_stress_relief: data.wants_stress_relief,
        workout_location: data.workout_location,
        upcoming_event: data.upcoming_event,
        when_upcoming_event: data.when_upcoming_event,
        commitment_duration: data.commitment_duration,
      },
    });
    return createLifeStyle;
  }
  async update(
    data: Partial<LifeStyleHabitsDto>,
    userId: string
  ): Promise<LifeStyleHabitEntity> {
    const updateLifeStyle = await prisma.lifeStyleHabits.update({
      where: { userId },
      data: {
        ...data,
      },
    });
    return updateLifeStyle;
  }
  async get(userId: string): Promise<LifeStyleHabitEntity> {
    const getLifeStyle = await prisma.lifeStyleHabits.findFirst({
      where: { userId },
    });
    return getLifeStyle;
  }
}
