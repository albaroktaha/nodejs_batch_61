import express from "express";
import bodyParser from "body-parser";
import router from "./routes/api";
import mongoose, { MongooseError } from "mongoose";

// TODO: should seperate into other files, such as env.ts
const PORT = 3000;
const DATABASE_URL = "cluster-wpu-course.e9818.mongodb.net/?retryWrites=true&w=majority&appName=cluster-wpu-course";
const DATABASE_USERNAME = "albaroktahaa";
const DATABASE_PASSWORD = "LRVN0hxa3M7mF8Ft";

async function db(){
    try {
        const connectionUrl = `mongodb+srv://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_URL}`;
        await mongoose.connect(connectionUrl, {
            dbName: "cluster-wpu-course",
        });
        console.log("succesful connect to database");
    } catch (error) {
        const err = error as MongooseError;
        throw new Error(err.message);
    }
}

async function main() {
    const app = express();

    await db();

    app.use(bodyParser.json());

    app.use("/api", router);

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    })
}

main();