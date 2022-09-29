const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal == null) {
    return {
      lions: data.species[0].residents.length,
      tigers: data.species[1].residents.length,
      bears: data.species[2].residents.length,
      penguins: data.species[3].residents.length,
      otters: data.species[4].residents.length,
      frogs: data.species[5].residents.length,
      snakes: data.species[6].residents.length,
      elephants: data.species[7].residents.length,
      giraffes: data.species[8].residents.length,
    };
  }
  if (Object.keys(animal).length === 1) {
    return data.species.find((bicho) => bicho.name === animal.specie).residents.length;
  }
  return data.species.find((bicho) => bicho.name === animal.specie).residents
    .filter((bicho) => bicho.sex === animal.sex).length;
}

module.exports = countAnimals;
