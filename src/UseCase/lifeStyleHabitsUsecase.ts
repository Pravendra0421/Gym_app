import { ILifeStyleRepository } from "../Repository/lifeStyleHabitsRepository";
import { LifeStyleHabitEntity } from "../Entity/lifeStyleHabitsEntity";
import { LifeStyleHabitsDto } from "../Dtos/lifeStyleHabits.Dtos";
import { IUserRepository } from "../Repository/userRepository";
export class LifeStyleUsecase {
  constructor(
    private lifeStyle: ILifeStyleRepository,
    private userRepository: IUserRepository
  ) {}
  async createLifeStyle(
    data: LifeStyleHabitsDto,
    firebaseUid: string
  ): Promise<LifeStyleHabitEntity> {
    const existingUser = await this.userRepository.findByFirebaseuid(
      firebaseUid
    );
    if (!existingUser) {
      throw new Error("user does not exist please login");
    }
    const userId = existingUser.id;
    const create = await this.lifeStyle.create(data, userId);
    return create;
  }
  async updateLifeStyle(
    data: LifeStyleHabitsDto,
    firebaseUid: string
  ): Promise<LifeStyleHabitEntity> {
    const existingUser = await this.userRepository.findByFirebaseuid(
      firebaseUid
    );
    if (!existingUser) {
      throw new Error("user does not exist please login");
    }
    const userId = existingUser.id;
    const update = await this.lifeStyle.update(data, userId);
    return update;
  }
  async getLifeStyle(firebaseUid: string): Promise<LifeStyleHabitEntity> {
    const existingUser = await this.userRepository.findByFirebaseuid(
      firebaseUid
    );
    if (!existingUser) {
      throw new Error("user does not exist please login");
    }
    const userId = existingUser.id;
    const get = await this.lifeStyle.get(userId);
    return get;
  }
}
