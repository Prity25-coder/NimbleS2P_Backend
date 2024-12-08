import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  patchProduct,
} from "../controllers/product.controller.js";

const productRouter = Router();

//get all products
productRouter.get("/", getAllProduct);
// productRouter.get("/:id");
productRouter.post("/", createProduct);
productRouter.patch("/:id", patchProduct);
productRouter.delete("/:id", deleteProduct);

export default productRouter;
