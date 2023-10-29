import { Controller } from "@nestjs/common";
import { FirebaseService } from "src/firebase/firebase.service";

import { UsersEntity } from "./model/users.entity";

@Controller("users")
export class UsersController {
  constructor(private readonly firebaseService: FirebaseService) {}

  /**
   * サインアップ時に実行されるユーザー作成関数
   */
  async createUserData(uid: string, email: string): Promise<string> {
    const userRef = await this.firebaseService.getCollectionRef("users");
    const accountData = new UsersEntity({
      userName: "",
      userImage: "",
      role: "guest",
    });
    return "";
  }
}