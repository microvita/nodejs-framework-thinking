const developmentConfig = {
  name: "Development Environment",
  dataStore: {
    username: process.env.MONGO_USERNAME,
    password: process.env.MONGO_PASSWORD,
    path: process.env.MONGO_PATH,
  },
};

export default developmentConfig;
