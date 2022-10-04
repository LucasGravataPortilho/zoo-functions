const data = require('../data/zoo_data');

const semParam = () => {
  let obj = {};
  obj = {
    NE: data.species.filter((x) => x.popularity)
      .filter((y) => y.location.includes('NE')).map((z) => z.name),
    NW: data.species.filter((x) => x.popularity)
      .filter((y) => y.location.includes('NW')).map((z) => z.name),
    SE: data.species.filter((x) => x.popularity)
      .filter((y) => y.location.includes('SE')).map((z) => z.name),
    SW: data.species.filter((x) => x.popularity)
      .filter((y) => y.location.includes('SW')).map((z) => z.name),
  };
  return obj;
};

const residentsBySpecies = (animal) => {
  const specie = data.species.find((bicho) => bicho.name === animal);
  const residentsSpecie = specie.residents.map((bicho) => bicho.name);
  return residentsSpecie;
};

const residentsBySpeciesAndGender = (animal, sex) => {
  const gender = sex;
  const specie = data.species.find((bicho) => bicho.name === animal);
  const residentsSpecieSex = specie.residents.filter((bicho) => bicho.sex === gender);
  const specieSexList = residentsSpecieSex.map((bicho) => bicho.name);
  return specieSexList;
};

function getAnimalMap(options) {
  // seu código aqui
}

module.exports = getAnimalMap;

// console.log(residentsBySpeciesAndGender('otters', 'male'));
