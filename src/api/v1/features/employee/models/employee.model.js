import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    empId: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    role: {
      type: String,
      trim: true,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
