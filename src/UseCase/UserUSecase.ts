import { IUserRepository } from "../Repository/userRepository.js";
import { UserDto } from "../Dtos/userDtos.js";
import { UserEntity } from "../Entity/userEntity.js";
import { UserUpdateDto } from "../Dtos/userDtos.js";
import { UserUpdateEntity } from "../Entity/userEntity.js";
// firebaseAdmin side effects are applied via config import in index.ts

export class UserUseCase {
  constructor(private userRepository: IUserRepository) {}
  async createUserUSeCase(data: UserDto): Promise<UserEntity> {
    let User = await this.userRepository.findByFirebaseuid(data.firebaseUid);
    if (!User) {
      User = await this.userRepository.create(data);
    }
    return User;
  }
  async updateUserUsecase(
    data: UserUpdateDto,
    firebaseUid: string
  ): Promise<UserUpdateEntity> {
    const existinguser = await this.userRepository.findByFirebaseuid(
      firebaseUid
    );
    if (!existinguser) {
      throw new Error("user does not exists");
    }
    const userid = existinguser.id;
    const update = await this.userRepository.update(data, userid);
    return update;
  }
}
