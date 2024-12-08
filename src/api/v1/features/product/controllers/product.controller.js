import asyncHandler from "express-async-handler";
import productService from "../services/product.service.js";
import STATUS_CODE from "../../../../../constant/statusCode.js";

const getAllProduct = asyncHandler(async (req, res) => {
  const product = await productService.allProduct();
  return res.status(STATUS_CODE.OK).json(product);
});

const createProduct = asyncHandler(async (req, res) => {
  const { title, description, price } = req.body;
  console.log(title, description, price);

  const product = await productService.createProduct(title, description, price);
  return res.status(STATUS_CODE.CREATED).json(product);
});

const patchProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, description, price } = req.body;

  const updateObj = { title, description, price };

  Object.keys(updateObj).forEach((key) => {
    if (updateObj[key] === undefined) delete updateObj[key];
  });

  if (Object.keys(updateObj).length === 0) {
    throw new Error(
      "Please provide some info to update",
      STATUS_CODE.BAD_REQUEST
    );
  }

  const product = await productService.updateProduct(id, updateObj);
  return res.status(STATUS_CODE.CREATED).json(product);
});
const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await productService.deleteProduct(id);
  return res.status(STATUS_CODE.OK).json(product);
});

export { getAllProduct, createProduct, patchProduct, deleteProduct };
