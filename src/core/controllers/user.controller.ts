import logger from "config/logger";
import { DataBuilder } from "core/db/DataBuilder";
import { Controller, Get } from "routing-controllers";

@Controller()
export class UserController {
  @Get("/users")
  async getAllUsers() {
    logger.info("Get all users request received");
    const users = await DataBuilder.User.getAll();
    return users;
  }
}
