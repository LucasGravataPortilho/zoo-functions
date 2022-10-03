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

const getError = (param) => {
  const listaIds = data.employees.map((pessoa) => pessoa.id);
  const listaNomes = data.employees.map((pessoa) => pessoa.firstName);
  const listaSobrenomes = data.employees.map((pessoa) => pessoa.lastName);
  if (!(listaIds.includes(param.id) || listaNomes.includes(param.name)
     || listaSobrenomes.includes(param.name))) {
    throw new Error('Informações inválidas');
  }
};

function getEmployeesCoverage(param) {
  if (param === undefined) { return semParam(); }
  getError(param);
  return getParam(param);
}

module.exports = getEmployeesCoverage;
