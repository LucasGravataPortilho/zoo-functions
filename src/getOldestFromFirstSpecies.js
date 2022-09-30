const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const findId = data.employees.find((person) => person.id === id);
  const findFirst = findId.responsibleFor[0];
  const findOlder = data.species.find((bicho) => bicho.id === findFirst).residents
    .reduce((bigger, number) => ((bigger.age > number.age) ? bigger : number));
  return [findOlder.name, findOlder.sex, findOlder.age];
}

module.exports = getOldestFromFirstSpecies;
