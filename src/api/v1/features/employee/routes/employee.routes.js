import { Router } from "express";
import {
  createEmployee,
  deleteEmployee,
  getAllEmployee,
  getEmployeeByName,
  getHigherSalary,
  putEmployee,
} from "../controllers/employee.controller.js";
const employeeRouter = Router();

// get all employee
employeeRouter.get("/", getAllEmployee);
employeeRouter.get("/name", getEmployeeByName); //TODO
employeeRouter.post("/", createEmployee);
employeeRouter.get("/salary", getHigherSalary);
employeeRouter.put("/:id", putEmployee);
employeeRouter.delete("/:id", deleteEmployee);

export default employeeRouter;
