import developmentConfig from "./development";

const environment: any = {
  development: developmentConfig,
};

const currentEnv = process.env.APPLICATION_ENV || "development";

const config = environment[currentEnv];

export default config;
