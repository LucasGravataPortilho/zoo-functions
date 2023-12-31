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

const residentsBySpeciesSorted = (animal) => {
  const sorted = residentsBySpecies(animal).sort();
  return sorted;
};

const residentsBySpeciesAndGenderSorted = (animal, sex) => {
  const sorted = residentsBySpeciesAndGender(animal, sex).sort();
  return sorted;
};

const includeNamesNotSorted = () => {
  const obj = {
    NE: semParam().NE.map((bicho) => ({ [`${bicho}`]: residentsBySpecies(bicho) })),
    NW: semParam().NW.map((bicho) => ({ [`${bicho}`]: residentsBySpecies(bicho) })),
    SE: semParam().SE.map((bicho) => ({ [`${bicho}`]: residentsBySpecies(bicho) })),
    SW: semParam().SW.map((bicho) => ({ [`${bicho}`]: residentsBySpecies(bicho) })),
  };
  return obj;
};

const includeNamesWithGenderSorted = (options) => {
  const obj = {
    NE: semParam().NE
      .map((bicho) => ({ [`${bicho}`]: residentsBySpeciesAndGenderSorted(bicho, options.sex) })),
    NW: semParam().NW
      .map((bicho) => ({ [`${bicho}`]: residentsBySpeciesAndGenderSorted(bicho, options.sex) })),
    SE: semParam().SE
      .map((bicho) => ({ [`${bicho}`]: residentsBySpeciesAndGenderSorted(bicho, options.sex) })),
    SW: semParam().SW
      .map((bicho) => ({ [`${bicho}`]: residentsBySpeciesAndGenderSorted(bicho, options.sex) })),
  };
  return obj;
};

const includeNamesSorted = (options) => {
  if (options.sex !== undefined) {
    return includeNamesWithGenderSorted(options);
  }
  const obj = {
    NE: semParam().NE.map((bicho) => ({ [`${bicho}`]: residentsBySpeciesSorted(bicho) })),
    NW: semParam().NW.map((bicho) => ({ [`${bicho}`]: residentsBySpeciesSorted(bicho) })),
    SE: semParam().SE.map((bicho) => ({ [`${bicho}`]: residentsBySpeciesSorted(bicho) })),
    SW: semParam().SW.map((bicho) => ({ [`${bicho}`]: residentsBySpeciesSorted(bicho) })),
  };
  return obj;
};

const includeNamesWithGenderNotSorted = (options) => {
  const obj = {
    NE: semParam().NE
      .map((bicho) => ({ [`${bicho}`]: residentsBySpeciesAndGender(bicho, options.sex) })),
    NW: semParam().NW
      .map((bicho) => ({ [`${bicho}`]: residentsBySpeciesAndGender(bicho, options.sex) })),
    SE: semParam().SE
      .map((bicho) => ({ [`${bicho}`]: residentsBySpeciesAndGender(bicho, options.sex) })),
    SW: semParam().SW
      .map((bicho) => ({ [`${bicho}`]: residentsBySpeciesAndGender(bicho, options.sex) })),
  };
  return obj;
};

const includeNames = (options) => {
  if (options.sorted === true) {
    return includeNamesSorted(options);
  } if (options.sex !== undefined) {
    return includeNamesWithGenderNotSorted(options);
  }
  return includeNamesNotSorted();
};

function getAnimalMap(options) {
  if (options !== undefined && options.includeNames === true) {
    return includeNames(options);
  }
  return semParam();
}

module.exports = getAnimalMap;
