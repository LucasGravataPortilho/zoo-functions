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

// const includesName = (param) => {
//   let obj = {};
//   const array = [];
// };

function getAnimalMap(options) {
  // seu código aqui
}

module.exports = getAnimalMap;

// console.log(data.species.map((nome) => nome.name));
