import mongoose from "mongoose";
import { DATABASE_URL, DATABASE_USERNAME, DATABASE_PASSWORD } from "./env";

const connect = async () => {
  try {
    const connectionUrl = `mongodb+srv://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_URL}`;
    await mongoose.connect(connectionUrl, {
      // autoIndex: true,
      dbName: "cluster-wpu-course",
      // connectTimeoutMS: 10000,
    });
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    console.log("Error connecting to database");
  }
};

export default connect;
