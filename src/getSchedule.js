const data = require('../data/zoo_data');

const { hours } = data;

const semParam = () => {
  const dias = Object.keys(hours);
  const horarios = Object.values(hours);
  const obj = [];
  dias.forEach((dia, index) => {
    obj.push({
      [dia]: {
        officeHour: `Open from ${horarios[index].open}am until ${horarios[index].close}pm`,
        exhibition: data.species.filter((disponivel) => disponivel.availability.includes(dia))
          .map((nome) => nome.name),
      },
    });
  });
  obj[obj.length - 1].Monday.officeHour = 'CLOSED';
  obj[obj.length - 1].Monday.exhibition = 'The zoo will be closed!';
  return obj;
};

const comParam = (param) => {
  const dados = Object.entries(hours);
  const findDay = dados.find((dia) => dia[0] === param);
  const obj = {};
  if (param === 'Monday') {
    obj[param] = { officeHour: 'CLOSED', exhibition: 'The zoo is closed!' };
  } else if (findDay) {
    obj[param] = {
      officeHour: `Open from ${findDay[1].open}am until ${findDay[1].close}pm`,
      exhibition: data.species.filter((disponivel) => disponivel.availability.includes(param))
        .map((nome) => nome.name),
    };
  } else {
    return data.species.find((bicho) => bicho.name === param).availability;
  }
  return obj;
};

function getSchedule(scheduleTarget) {
}

module.exports = getSchedule;

console.log(comParam('elephants'));
