const developmentConfig = {
  name: "Development Environment",
  dataStore: {
    path: process.env.DATABASE_URL,
  },
};

export default developmentConfig;
