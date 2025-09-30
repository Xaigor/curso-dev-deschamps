const calculadora = require("../../models/calculadora.js");

test("Soma de 2 + 3 deve ser 5", () => {
  const resultado = calculadora.somar(3, 2);
  expect(resultado).toBe(5);
});

test("Soma de 5 + 100 deve ser 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("Somar 'banana' + 100 deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Erro");
});
