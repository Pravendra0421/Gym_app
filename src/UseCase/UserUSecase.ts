import { IUserRepository } from "../Repository/userRepository";
import { UserDto } from "../Dtos/userDtos";
import { UserEntity } from "../Entity/userEntity";
// firebaseAdmin side effects are applied via config import in index.ts

export class UserUseCase {
  constructor(private userRepository: IUserRepository) {}
  async createUserUSeCase(data: UserDto): Promise<UserEntity> {
    let User = await this.userRepository.findByFirebaseuid(data.firebaseuid);
    if (!User) {
      User = await this.userRepository.create(data);
    }
    return User;
  }
}
