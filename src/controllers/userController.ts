import { Request, Response } from "express";
import { UserUseCase } from "../UseCase/UserUSecase.js";
import { USerRepository } from "../Repository/userRepository.js";
import { UserDto } from "../Dtos/userDtos";
const userRepository = new USerRepository();
const userUsercase = new UserUseCase(userRepository);

export class UserControllers {
  async createUser(req: Request, res: Response) {
    try {
      // const dummyUser = {                                      // this is only for backend testing
      //   uid: `test-uid-${Date.now()}`,                     // this is only for backend testing
      //   email: `test-${Date.now()}@example.com`,         // this is only for backend testing
      // };                                                 // this is only for backend testing
      const firebaseUser = req.User!;
      // const firebaseUser = dummyUser; // this is only for backend testing
      const userDto: UserDto = {
        firebaseuid: firebaseUser.uid,
        email: firebaseUser.email!,
      };
      const user = await userUsercase.createUserUSeCase(userDto);
      res.status(201).json(user);
    } catch (error) {
      console.error("User registration  error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
