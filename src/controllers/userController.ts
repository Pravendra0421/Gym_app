import { Request, Response } from "express";
import { UserUseCase } from "../UseCase/UserUSecase.js";
import { USerRepository } from "../Repository/userRepository.js";
import { UserDto, UserUpdateDto } from "../Dtos/userDtos.js";
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
        firebaseUid: firebaseUser.uid,
        email: firebaseUser.email!,
        ...req.body,
      };
      console.log("this the frontend daata", userDto);
      const user = await userUsercase.createUserUSeCase(userDto);
      res.status(201).json(user);
    } catch (error) {
      console.error("User registration  error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async updateUser(req: Request, res: Response) {
    try {
      const data: UserUpdateDto = req.body;
      const firebaseUser = req.User!;
      const firebaseUId = firebaseUser.uid;
      const update = await userUsercase.updateUserUsecase(data, firebaseUId);
      res.status(201).json(update);
    } catch (error) {
      console.error("User update  error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
