const data = require('../data/zoo_data');

const semParam = () => {
  const array = [];
  data.employees.forEach((pessoa) => {
    array.push({
      id: pessoa.id,
      fullName: `${pessoa.firstName} ${pessoa.lastName}`,
      species: pessoa.responsibleFor.map((cada) => data.species.find((animal) => animal.id === cada))
        .map((bicho) => bicho.name),
      locations: pessoa.responsibleFor.map((cada) => data.species.find((animal) => animal.id === cada))
        .map((bicho) => bicho.location)
    })
  })
  return array;
};

const getParam = (param) => {
  const getName = data.employees.find((nome) => nome.firstName === param.name);
  const getLast = data.employees.find((last) => last.lastName === param.name);
  const getId = data.employees.find((pessoa) => pessoa.id === param.id);
  const obj = {};
  if (param === getName || param === getLast || param === getId) {
    obj[param] = {
      id:
    };
  }
};

function getEmployeesCoverage() {
  return semParam();
}

module.exports = getEmployeesCoverage;

