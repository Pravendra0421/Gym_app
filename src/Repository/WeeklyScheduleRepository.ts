import { WeeklyScheduleDto } from "../Dtos/WeeklyScheduleDtos.js";
import { WeeklyScheduleEntity } from "../Entity/WeeklyScheduleEntity.js";
import prisma from "../lib/prisma.js";

export interface IWeeklyScheduleRepository {
  createWeeklySchedule(
    data: WeeklyScheduleDto,
    PlanId: string
  ): Promise<WeeklyScheduleEntity>;
  updateWeeklySchedule(
    data: WeeklyScheduleDto,
    weeklyScheduleId: string
  ): Promise<WeeklyScheduleEntity>;
  getWeeklySchedule(weeklyScheduleId: string): Promise<WeeklyScheduleEntity>;
  getAllWeeklySchedule(): Promise<WeeklyScheduleEntity[]>;
  deleteWeeklySchedule(weeklyScheduleId: string): Promise<void>;
}
export class WeeklyScheduleRepository implements IWeeklyScheduleRepository {
  async createWeeklySchedule(
    data: WeeklyScheduleDto,
    PlanId: string
  ): Promise<WeeklyScheduleEntity> {
    const create = await prisma.weeklySchedule.create({
      data: {
        planId: PlanId,
        weekNumber: data.weekNumber,
      },
      include: {
        days: true,
      },
    });
    return create;
  }
  async updateWeeklySchedule(
    data: WeeklyScheduleDto,
    weeklyScheduleId: string
  ): Promise<WeeklyScheduleEntity> {
    const update = await prisma.weeklySchedule.update({
      where: { id: weeklyScheduleId },
      data: {
        weekNumber: data.weekNumber,
      },
      include: {
        days: true,
      },
    });
    return update;
  }
  async getAllWeeklySchedule(): Promise<WeeklyScheduleEntity[]> {
    const getAll = await prisma.weeklySchedule.findMany({
      include: {
        days: true,
      },
    });
    return getAll;
  }
  async getWeeklySchedule(
    weeklyScheduleId: string
  ): Promise<WeeklyScheduleEntity> {
    const get = await prisma.weeklySchedule.findFirst({
      where: { id: weeklyScheduleId },
    });
    return get as WeeklyScheduleEntity;
  }
  async deleteWeeklySchedule(weeklyScheduleId: string): Promise<void> {
    await prisma.weeklySchedule.delete({
      where: {
        id: weeklyScheduleId,
      },
    });
  }
}
