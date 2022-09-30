const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('o argumento count deve retornar o valor 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('o argumento names deve retornar um array que possui Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('o argumento averageAge deve retornar número próximo a 10,5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('o argumento vazio deve retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('o argumento diferente de string retornando invalidez', () => {
    expect(handlerElephants(5)).toBe('Parâmetro inválido, é necessário uma string');
  });
});
