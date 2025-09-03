import { WeeklyScheduleDayDto } from "../Dtos/WeeklyScheduleDayDtos.js";
import { WeeklyScheduleDayEntity } from "../Entity/WeeklyScheduleDayEntity.js";
import prisma from "../lib/prisma.js";

export interface IWeeklyScheduleDayRepository {
  createWeeklyScheduleDay(
    data: WeeklyScheduleDayDto,
    weeklyScheduleId: string
  ): Promise<WeeklyScheduleDayEntity>;
  updateWeeklyScheduleDay(
    data: Partial<WeeklyScheduleDayDto>,
    weeklyScheduleDayId: string
  ): Promise<WeeklyScheduleDayEntity>;
  getWeeklyScheduleDay(
    weeklyScheduleDayId: string
  ): Promise<WeeklyScheduleDayEntity>;
  deleteWeeklyScheduleDay(weeklyScheduleDayId: string): Promise<void>;
}
export class WeeklyScheduleDayRepository
  implements IWeeklyScheduleDayRepository
{
  async createWeeklyScheduleDay(
    data: WeeklyScheduleDayDto,
    weeklyScheduleId: string
  ): Promise<WeeklyScheduleDayEntity> {
    const create = await prisma.weeklyScheduleDay.create({
      data: {
        weeklyScheduleId: weeklyScheduleId,
        dayOfWeek: data.dayOfWeek,
        dailyWorkoutId: data.dailyWorkoutId,
      },
      include: {
        weeklySchedule: true,
        dailyWorkout: true,
      },
    });
    return create;
  }
  async updateWeeklyScheduleDay(
    data: Partial<WeeklyScheduleDayDto>,
    weeklyScheduleDayId: string
  ): Promise<WeeklyScheduleDayEntity> {
    const update = await prisma.weeklyScheduleDay.update({
      where: {
        id: weeklyScheduleDayId,
      },
      data: {
        dayOfWeek: data.dayOfWeek,
      },
    });
    return update;
  }
  async getWeeklyScheduleDay(
    weeklyScheduleDayId: string
  ): Promise<WeeklyScheduleDayEntity> {
    const get = await prisma.weeklyScheduleDay.findFirst({
      where: {
        id: weeklyScheduleDayId,
      },
    });
    return get as WeeklyScheduleDayEntity;
  }
  async deleteWeeklyScheduleDay(weeklyScheduleDayId: string): Promise<void> {
    await prisma.weeklyScheduleDay.delete({
      where: {
        id: weeklyScheduleDayId,
      },
    });
  }
}
