import mongoose from "mongoose";
import Employee from "../models/employee.model.js";
import STATUS_CODE from "../../../../../constant/statusCode.js";
import getEmpUniqueId from "../../../../../utils/getEmpUniqueId.js";

const { ObjectId } = mongoose.Types;

class EmployeeService {
  allEmployee = async () => {
    const allEmployee = await Employee.find();
    return allEmployee;
  };

  createEmployee = async (name, role, salary) => {
    const employee = new Employee({
      empId: await getEmpUniqueId(),
      name,
      role,
      salary,
    });
    const newEmp = await employee.save();
    return newEmp;
  };

  employeeByName = async (name) => {
    const employee = await Employee.findOne({ name });
    return employee;
  };

  higherSalary = async () => {
    const employee = await Employee.findOne().sort({ salary: -1 });
    return employee;
  };

  updateEmployee = async (id, updateObj) => {
    const employee = await Employee.findOne({ _id: id });

    if (!employee) {
      throw new Error("No Employee found", STATUS_CODE.NOT_FOUND);
    }
    const updatedEmployee = await Employee.findByIdAndUpdate(id, updateObj, {
      new: true,
    });

    return updatedEmployee;
  };

  deleteEmployee = async (id) => {
    const employee = await Employee.findOne({ _id: id });

    if (!employee) {
      throw new Error("No employee found", STATUS_CODE.NOT_FOUND);
    }

    const deleteEmployee = await Employee.findOneAndDelete({ _id: id });

    return deleteEmployee;
  };
}

const employeeService = new EmployeeService();
export default employeeService;
