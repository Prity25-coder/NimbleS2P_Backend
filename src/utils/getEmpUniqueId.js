import Employee from "../api/v1/features/employee/models/employee.model.js";

// [yyyy][mm][EmpNo]
async function getEmpUniqueId() {
  const { yyyy, mm } = getCurrYearAndMonth();
  const uniqueNumber = await generateUniqueNumber();
  return `${yyyy}${mm}${uniqueNumber}`;
}

export default getEmpUniqueId;

function getCurrYearAndMonth() {
  const currDate = new Date();
  const yyyy = currDate.getFullYear();
  let mm = currDate.getMonth() + 1;

  if (mm < 10) {
    mm = `0${mm}`;
  }

  return {
    yyyy,
    mm,
  };
}

async function generateUniqueNumber() {
  // query total no. of emp from db
  // return TOE + 1
  const totalNoEmp = await Employee.find();
  return totalNoEmp.length + 1;
}
