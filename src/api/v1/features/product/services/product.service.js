import mongoose from "mongoose";
import Product from "../models/product.model.js";
import STATUS_CODE from "../../../../../constant/statusCode.js";

const { ObjectId } = mongoose.Types;

class ProductService {
  allProduct = async () => {
    const allProduct = await Product.find();
    return allProduct;
  };
  createProduct = async (title, description, price) => {
    console.log(title, description, price);

    const product = new Product({
      title,
      description,
      price,
    });

    const newProduct = await product.save();
    return newProduct;
  };

  updateProduct = async (id, updateObj) => {
    const product = await Product.findOne({ _id: id });

    if (!product) {
      throw new Error("No Product found", STATUS_CODE.NOT_FOUND);
    }
    const updatedProduct = await Product.findByIdAndUpdate(id, updateObj, {
      new: true,
    });
    return updatedProduct;
  };
  deleteProduct = async (id) => {
    const product = await Product.findOne({ _id: id });

    if (!product) {
      throw new Error("No product found", STATUS_CODE.NOT_FOUND);
    }
    const deleteProduct = await Product.findOneAndDelete({ _id: id });

    return deleteProduct;
  };
}

const productService = new ProductService();
export default productService;
