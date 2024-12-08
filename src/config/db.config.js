import mongoose from "mongoose";
import config from "./config.js";

const { mongoUri,mongoUser, mongoUserPass, dbName } = config;
console.log(config);

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoUri, {
      // user: mongoUser,
      // pass: mongoUserPass,
      dbName: dbName,
    });
    console.log(`Connected to the ${mongoose.connection.name} database`);
  } catch (error) {
    console.log("Database Connection FAILED!");
    console.log(error);
    process.exit(1);
  }
};

export default connectToMongoDB;
