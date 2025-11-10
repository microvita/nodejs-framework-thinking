import express, { Application } from "express";
import logger from "./config/logger";
import environment from "./config/env";
import mongoose from "mongoose";

class App {
  public express: Application;
  public port: number;

  constructor(port: number) {
    this.express = express();
    this.port = port;

    this.initiateDatabaseConnection();
  }

  // DB Connection
  private initiateDatabaseConnection(): void {
    const { name } = environment,
      { username, password, path } = environment.dataStore;

    mongoose
      .connect(`mongodb://localhost:27017/coreframework`)
      .then(() => {
        logger.info(`Connected to MongoDB for ${name}`);
      })
      .catch((error) => logger.error("Error connecting to MongoDB:", error));
  }

  public listen(): void {
    this.express.listen(this.port, () => {
      logger.info(`Server is running on port ${this.port}`);
    });
  }
}

export default App;
