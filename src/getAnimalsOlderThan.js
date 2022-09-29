const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const pegaAnimais = data.species.filter((especie) => especie.name === animal);
  return pegaAnimais[0].residents.every((bicho) => bicho.age >= age);
}

module.exports = getAnimalsOlderThan;
