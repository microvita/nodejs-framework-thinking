import devLogger from "./devLogger";

let logger: any = null;

if (process.env.APPLICATION_ENV === "development") {
  logger = devLogger();
}

export default logger;
