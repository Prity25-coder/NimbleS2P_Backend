const {
  PORT,
  MONGODB_URI,
  MONGO_USER,
  MONGO_USER_PASSWORD,
  DB_NAME,
} = process.env;

const config = {
  port: Number(PORT) || 3000,
  mongoUri: String(MONGODB_URI),
  mongoUser: String(MONGO_USER),
  mongoUserPass: String(MONGO_USER_PASSWORD),
  dbName: String(DB_NAME),
};

Object.freeze(config);
export default config;
