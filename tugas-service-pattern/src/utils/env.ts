import dotenv from "dotenv";

dotenv.config();

export const CLOUDINARY_API_KEY: string = process.env.CLOUDINARY_API_KEY || "957216835935484";
export const CLOUDINARY_API_SECRET: string = process.env.CLOUDINARY_API_SECRET || "7psc43eiO0jO44zHIoIr7-Coxp860gKTcWS63IwDO9de5XtGttWFQ4";
export const CLOUDINARY_CLOUD_NAME: string = process.env.CLOUDINARY_CLOUD_NAME || "dpri4itxw";
export const DATABASE_URL: string = process.env.DATABASE_URL || "mongodb+srv://cluster-wpu-course.e9818.mongodb.net/?retryWrites=true&w=majority&appName=cluster-wpu-course";
export const DATABASE_USERNAME: string = process.env.DATABASE_USERNAME || "albaroktahaa";
export const DATABASE_PASSWORD: string = process.env.DATABASE_PASSWORD || "LRVN0hxa3M7mF8Ft";