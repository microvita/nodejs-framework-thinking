import "dotenv/config";
import App from "./app";
import { UserController } from "core/controllers/user.controller";

async function bootstrap() {
  const port = process.env.APPLICATION_PORT
    ? Number(process.env.APPLICATION_PORT)
    : 3000;
  const app = new App(port, [UserController], "/v1");
  app.listen();
}

bootstrap();

/**
 * UserController, EmailController, AuthController, TokenController
 * [UserController, EmailController, AuthController, TokenController]
 */
