const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  const filtraId = data.species.filter((animal) => ids.find((id) => (animal.id === id)));
  return filtraId;
}

module.exports = getSpeciesByIds;
