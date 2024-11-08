import { Router } from "express";
import productController from "../controllers/product.controller";
import categoryController from "../controllers/category.controller";

const router = Router();

// CRUD Categories
router.post("/categories", categoryController.create);
router.get("/categories", categoryController.findAll);
router.get("/categories/:id", categoryController.findOne);
router.put("/categories/:id", categoryController.update);
router.delete("/categories/:id", categoryController.remove);

// CRUD Products
router.post("/products", productController.create);
router.get("/products", productController.findAll);
router.get("/products/:id", productController.findOne);
router.put("/products/:id", productController.update);
router.delete("/products/:id", productController.remove);


export default router;