import express, { Application } from "express";
import logger from "./config/logger";
import environment from "./config/env";
import "reflect-metadata";
import { useExpressServer } from "routing-controllers";
import { ResponseInterceptor } from "core/interceptors/response.interceptor";
import { ErrorMiddleware } from "core/middlewares/error.middleware";
import { pool } from "./config/database";
class App {
  public express: Application;
  public port: number;

  constructor(port: number, controllers: any[], routePrefix: string) {
    this.express = express();
    this.port = port;

    this.initiateDatabaseConnection();
    this.initializeControllers(controllers, routePrefix);
  }

  // DB Connection
  private async initiateDatabaseConnection(): Promise<void> {
    const { name } = environment;
    const { path } = environment.dataStore;

    try {
      const client = await pool.connect();
      const result = await client.query("SELECT NOW()");
      logger.info(
        `${name} connected to database at Time: ${result.rows[0].now} (Success)`
      );
      client.release();
    } catch (error) {
      logger.error(`Failed to connect to database at ${path}: ${error}`);
      process.exit(1);
    }
  }

  // Controller
  private initializeControllers(
    controllerList: any[],
    routePrefix: string
  ): void {
    useExpressServer(this.express, {
      controllers: controllerList,
      routePrefix: routePrefix ? `/api${routePrefix}` : "/api",
      defaultErrorHandler: false,
      middlewares: [ErrorMiddleware],
      interceptors: [ResponseInterceptor],
    });
  }

  public listen(): void {
    this.express.listen(this.port, () => {
      logger.info(`Server is running on port ${this.port}`);
    });
  }
}

export default App;
