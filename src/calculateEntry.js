const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let senhor = 0;
  let adulto = 0;
  let crianca = 0;
  entrants.forEach((person) => {
    if (person.age < 18) { crianca += 1; }
    if (person.age >= 18 && person.age < 50) { adulto += 1; }
    if (person.age >= 50) { senhor += 1; }
  });
  const obj = { adult: adulto, child: crianca, senior: senhor };
  return obj;
}

function calculateEntry(entrants) {
  let soma = 0;
  if (entrants == null || Object.keys(entrants).length === 0) { return 0; }
  const entradas = countEntrants(entrants);
  const { prices } = data;
  soma += entradas.adult * prices.adult;
  soma += entradas.child * prices.child;
  soma += entradas.senior * prices.senior;
  return soma;
}

module.exports = { calculateEntry, countEntrants };
