import asyncHandler from "express-async-handler";
import employeeService from "../services/employee.service.js";
import STATUS_CODE from "../../../../../constant/statusCode.js";

const getAllEmployee = asyncHandler(async (req, res) => {
  const employees = await employeeService.allEmployee();
  return res.status(STATUS_CODE.OK).json(employees);
});

const createEmployee = asyncHandler(async (req, res) => {
  const { name, role, salary } = req.body;

  const employee = await employeeService.createEmployee(name, role, salary);
  return res.status(STATUS_CODE.CREATED).json(employee);
});

const getEmployeeByName = asyncHandler(async (req, res) => {
  const { name } = req.query;
  const employee = await employeeService.employeeByName(name);
  return res.status(STATUS_CODE.OK).json(employee);
});

// get employee who salary is higher than all //TODO
const getHigherSalary = asyncHandler(async (req, res) => {
  const employee = await employeeService.higherSalary();
  return res.status(STATUS_CODE.OK).json(employee);
});

const putEmployee = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, role, salary } = req.body;

  const updateObj = { name, role, salary };

  Object.keys(updateObj).forEach((key) => {
    if (updateObj[key] === undefined) delete updateObj[key];
  });

  if (Object.keys(updateObj).length === 0) {
    throw new Error(
      "Please provide some info to update",
      STATUS_CODE.BAD_REQUEST
    );
  }

  const employee = await employeeService.updateEmployee(id, updateObj);
  return res.status(STATUS_CODE.CREATED).json(employee);
});

const deleteEmployee = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const employee = await employeeService.deleteEmployee(id);
  return res.status(STATUS_CODE.OK).json(employee);
});

export {
  getAllEmployee,
  createEmployee,
  deleteEmployee,
  getEmployeeByName,
  getHigherSalary,
  putEmployee,
};
