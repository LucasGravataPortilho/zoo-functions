const data = require('../data/zoo_data');

const semParam = () => {
  const array = [];
  data.employees.forEach((pessoa) => {
    array.push({
      id: pessoa.id,
      fullName: `${pessoa.firstName} ${pessoa.lastName}`,
      species: pessoa.responsibleFor.map((x) => data.species.find((animal) => animal.id === x))
        .map((bicho) => bicho.name),
      locations: pessoa.responsibleFor.map((x) => data.species.find((animal) => animal.id === x))
        .map((bicho) => bicho.location),
    });
  });
  return array;
};

const checkParam = (param) => {
  if (param.name) {
    return data.employees.find((pessoa) => [pessoa.firstName, pessoa.lastName]
      .includes(param.name));
  }
  if (param.id) {
    return data.employees.find((pessoa) => pessoa.id === param.id);
  }
};

const getParam = (param) => {
  const getName = data.employees.find((nome) => nome.firstName === param.name);
  const getLast = data.employees.find((last) => last.lastName === param.name);
  const getId = data.employees.find((pessoa) => pessoa.id === param.id);
  const funcionarios = checkParam(param);
  let obj = {};
  if (param.name === getName || param.name === getLast || param.id === getId) {
    obj = {
      id: funcionarios.id,
      fullName: `${funcionarios.firstName} ${funcionarios.lastName}`,
      species: funcionarios.responsibleFor.map((x) => data.species
        .find((animal) => animal.id === x)).map((bicho) => bicho.name),
      locations: funcionarios.responsibleFor.map((x) => data.species
        .find((animal) => animal.id === x)).map((bicho) => bicho.location),
    };
  }
  return obj;
};

function getEmployeesCoverage(param) {
  if (param === undefined) { return semParam(); }
  if (!(param.name === data.employees.find((nome) => nome.firstName === param.name)
     || param.name === data.employees.find((last) => last.lastName === param.name)
     || param.id === data.employees.find((pessoa) => pessoa.id === param.id))) {
    throw new Error('Informações inválidas');
  }
  return getParam(param);
}

module.exports = getEmployeesCoverage;

// console.log(getEmployeesCoverage({ name: 'Ola' }));
