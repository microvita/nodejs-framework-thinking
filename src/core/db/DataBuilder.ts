import { UserModel } from "core/models/User";

export class DataBuilder {
  private static instance: Map<string, any> = new Map();

  static get User() {
    if (!this.instance.has("user")) {
      this.instance.set("user", new UserModel());
    }
    return this.instance.get("user") as UserModel;
  }
}

export const DB = DataBuilder;
