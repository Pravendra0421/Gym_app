import { WeeklyScheduleDayDto } from "../Dtos/WeeklyScheduleDayDtos.js";
import { WeeklyScheduleDayEntity } from "../Entity/WeeklyScheduleDayEntity.js";
import { IWeeklyScheduleDayRepository } from "../Repository/WeeklyScheduleDayRepository.js";

export class WeeklyScheduledayUsecase {
  constructor(private weeklySchedulerepository: IWeeklyScheduleDayRepository) {}
  async createWeeklyScheduleday(
    data: WeeklyScheduleDayDto,
    weeklyScheduleId: string
  ): Promise<WeeklyScheduleDayEntity> {
    const create = await this.weeklySchedulerepository.createWeeklyScheduleDay(
      data,
      weeklyScheduleId
    );
    return create;
  }
  async updateWeeklyScheduleDay(
    data: WeeklyScheduleDayDto,
    weeklyScheduleDayId: string
  ): Promise<WeeklyScheduleDayEntity> {
    const update = await this.weeklySchedulerepository.updateWeeklyScheduleDay(
      data,
      weeklyScheduleDayId
    );
    return update;
  }
  async getWeeklyScheduleDay(
    weeklyScheduleDayId: string
  ): Promise<WeeklyScheduleDayEntity> {
    const get = await this.weeklySchedulerepository.getWeeklyScheduleDay(
      weeklyScheduleDayId
    );
    return get;
  }
  async deleteWeeklyScheduleDay(weeklyScheduleDayId: string): Promise<void> {
    const deleteWeeklyScheduleDay =
      await this.weeklySchedulerepository.deleteWeeklyScheduleDay(
        weeklyScheduleDayId
      );
    return deleteWeeklyScheduleDay;
  }
}
