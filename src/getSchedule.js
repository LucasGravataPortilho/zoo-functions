const data = require('../data/zoo_data');

const { hours } = data;

const semParam = () => {
  const dias = Object.keys(hours);
  const horarios = Object.values(hours);
  const obj = {};
  dias.forEach((dia, index) => {
    if (dia === 'Monday') {
      obj[dia] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    } else {
      obj[dia] = {
        officeHour: `Open from ${horarios[index].open}am until ${horarios[index].close}pm`,
        exhibition: data.species.filter((disponivel) => disponivel.availability.includes(dia))
          .map((nome) => nome.name),
      };
    }
  });
  return obj;
};

const comParam = (param) => {
  const obj = {};
  const diasSemana = Object.keys(data.hours);
  if (param === 'Monday') {
    obj[param] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  } else if (diasSemana.some((item) => item.includes(param))) {
    const dados = Object.entries(data.hours).map((dia) => dia);
    const findDay = dados.find((dia) => dia[0] === param);
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
  const namesDays = Object.keys(hours).concat(data.species.map((bicho) => bicho.name));
  if (scheduleTarget == null || (namesDays.some((x) => x.includes(scheduleTarget))) === false) {
    return semParam();
  }
  return comParam(scheduleTarget);
}

module.exports = getSchedule;

// console.log(Object.entries(data.hours).map((dia) => dia).find((dia) => dia[0] === 'Wednesday'));
