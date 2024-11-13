/*
# src/utils/database.ts
*/
import mongoose from "mongoose";
import { DATABASE_URL, DATABASE_USERNAME, DATABASE_PASSWORD } from "./env";

const connect = async () => {
  try {
    const connectionUrl = `mongodb+srv://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_URL}`;
    await mongoose.connect(connectionUrl, {
      dbName: "cluster-wpu-course",
    });
    return "Database connected";
  } catch (error) {
    return error;
  }
};

export default connect;
