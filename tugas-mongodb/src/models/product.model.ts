import mongoose from "mongoose";
import { Category } from "./category.model";

export interface Products {
    _id: string;
    name: string;
    description: string;
    price: number;
    qty: number;
    image: string[];
    category: Category;
}

const schema = new mongoose.Schema<Products>(
    {
        name: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        description: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        price: {
            type: mongoose.Schema.Types.Number,
            required: true,
        },
        qty: {
            type: mongoose.Schema.Types.Number,
            required: true,
        },
        image: {
            type: [mongoose.Schema.Types.String],
            default: []
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "category",
        }
    }
);

export const ProductModel = mongoose.model("product", schema);