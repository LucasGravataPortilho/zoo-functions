const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('os argumentos Monday e 09:00 AM deve retornar fechado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('os argumentos Tuesday e 09:00 AM deve retornar aberto', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('os argumentos Wednesday e 09:00 PM deve retornar fechado', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('sem argumento deve retornar um objeto com infos', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('os argumentos Thu e 09:00 AM deve retornar uma mensagem exceção', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
  it('os argumentos Friday e 09:00 ZM deve retornar uma mensagem exceção', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('os argumentos Saturday e C9:00 AM deve retornar uma mensagem exceção', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-ZM')).toThrowError(new Error('The hour should represent a number'));
  });
  it('os argumentos Sunday e 09:c0 AM deve retornar uma mensagem exceção', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrowError(new Error('The minutes should represent a number'));
  });
});
