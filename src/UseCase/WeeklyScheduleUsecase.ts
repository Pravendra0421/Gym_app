import { WeeklyScheduleDto } from "../Dtos/WeeklyScheduleDtos.js";
import { WeeklyScheduleEntity } from "../Entity/WeeklyScheduleEntity.js";
import { IWeeklyScheduleRepository } from "../Repository/WeeklyScheduleRepository.js";

export class WeeklyScheduleUSecase {
  constructor(private weeklyScheduleRespository: IWeeklyScheduleRepository) {}
  async createWeekly(
    data: WeeklyScheduleDto,
    workoutPlanId: string
  ): Promise<WeeklyScheduleEntity> {
    const create = await this.weeklyScheduleRespository.createWeeklySchedule(
      data,
      workoutPlanId
    );
    return create;
  }
  async updateWeekly(
    data: WeeklyScheduleDto,
    WeeklySchduleId: string
  ): Promise<WeeklyScheduleEntity> {
    const update = await this.weeklyScheduleRespository.updateWeeklySchedule(
      data,
      WeeklySchduleId
    );
    return update;
  }
  async getWeeklySchedule(
    WeeklyScheduleId: string
  ): Promise<WeeklyScheduleEntity> {
    const get = await this.weeklyScheduleRespository.getWeeklySchedule(
      WeeklyScheduleId
    );
    return get;
  }
  async getAllWeeklySchedule(): Promise<WeeklyScheduleEntity[]> {
    const getAll = await this.weeklyScheduleRespository.getAllWeeklySchedule();
    return getAll;
  }
  async deleteWeeklySchedule(WeeklyScheduleId: string): Promise<void> {
    const deleteWeekly =
      await this.weeklyScheduleRespository.deleteWeeklySchedule(
        WeeklyScheduleId
      );
    return deleteWeekly;
  }
}
