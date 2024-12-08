// Core modules
import { readFile } from "node:fs/promises";
import path from "node:path";

import "dotenv/config";
import express from "express";
import compression from "compression";
import swaggerUI from "swagger-ui-express";

import { employeeRouter } from "./api/v1/features/employee/index.js";
import { productRouter } from "./api/v1/features/product/index.js";
import connectToMongoDB from "./config/db.config.js";

import errorHandler from "./api/common/middlewares/error.middleware.js";

// api doc (json file)
const apiDocs = JSON.parse(await readFile(path.resolve("swagger.json")));

const app = express();

// database connection mongoDB
await connectToMongoDB();

// this will help us to read req.body if coming request is in urlencoded or json format
app.use(express.json({ limit: "17kb" }));
app.use(express.urlencoded({ extended: true, limit: "17kb" }));

//* compress all responses
app.use(compression());

//all employee routes
app.use("/api/v1/employees", employeeRouter);

// all product routes
app.use("/api/v1/products", productRouter);

// for api documentation using swagger.
// ? Keeping swagger code at the end so that we can load swagger on "/" or "/api/v1/docs" route
app.use(["/api/v1/docs", "/"], swaggerUI.serve);
app.get(["/api/v1/docs", "/"], swaggerUI.setup(apiDocs));

app.use(errorHandler);
export default app;
