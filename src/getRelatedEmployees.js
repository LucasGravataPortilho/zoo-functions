const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees
    .filter((ger) => ger.managers.length <= 1).some((pessoa) => pessoa.id === id);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees
    .filter((ger) => ger.managers.find((id) => id === managerId))
    .map((pessoa) => `${pessoa.firstName} ${pessoa.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
