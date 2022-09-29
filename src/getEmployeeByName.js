const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName == null) {
    return {};
  }
  return data.employees
    .find((job) => job.firstName === employeeName || job.lastName === employeeName);
}

module.exports = getEmployeeByName;
