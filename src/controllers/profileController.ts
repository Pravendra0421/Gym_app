import { ProfileRepository } from "../Repository/userProfileRepository.js";
import { Request, Response } from "express";
import { ProfileUseCase } from "../UseCase/ProfileUsecase.js";
import { ProfileDto } from "../Dtos/userProfileDtos.js";
import { USerRepository } from "../Repository/userRepository.js";

const profileRepository = new ProfileRepository();
const userReposiroty = new USerRepository();
const profileUSecase = new ProfileUseCase(profileRepository, userReposiroty);

export class ProfileController {
  async create(req: Request, res: Response) {
    try {
      const data: ProfileDto = req.body;
      const firebaseUid = req.User.uid;
      if (!firebaseUid) {
        return res.status(404).json({
          message: "Unauthorized: User not found in token.",
        });
      }
      const newProfile = await profileUSecase.createProfileUSecase(
        data,
        firebaseUid
      );
      res.status(201).json(newProfile);
    } catch (error) {
      console.error("Error creating profile:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async updateProfile(req: Request, res: Response) {
    try {
      const data: ProfileDto = req.body;
      const firebaseUid = req.User.uid;
      if (!firebaseUid) {
        return res.status(404).json({
          message: "Unauthorized: User not found in token.",
        });
      }
      const UpdateProfile = await profileUSecase.updateProfileUSecase(
        data,
        firebaseUid
      );
      res.status(201).json(UpdateProfile);
    } catch (error) {
      console.error("Error UpdateProfile :", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async getProfile(req: Request, res: Response) {
    try {
      const firebaseuid = req.User.uid;
      const getProfile = await profileUSecase.getProfileUSecase(firebaseuid);
      res.status(201).json(getProfile);
    } catch (error) {
      console.error("Error get the profile", error);
      res.status(500).json({
        message: "Internal server Error",
      });
    }
  }
}
