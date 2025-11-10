import "dotenv/config";
import App from "./app";

async function bootstrap() {
  const port = process.env.APPLICATION_PORT
    ? Number(process.env.APPLICATION_PORT)
    : 3000;
  const app = new App(port);
  app.listen();
}

bootstrap();
