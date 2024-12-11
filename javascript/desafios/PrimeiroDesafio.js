// faça um programa para calcular o valor e uma viagem.

// você terá 3 variáveis, sendo elas:
// 1 - preço do combustível.
// 2 - gasto médio de combustível do carro por km.
// 3 - distância em KM da viagem;

// imprima no console o valor que será gasto para realizar esta viagem.

const combustivelPreco = 5.92 ;
const gastoMedioPorKm = 8;
const distanciaKM = 40;

const valorGasto = (distanciaKM / gastoMedioPorKm) * combustivelPreco;

console.log(`O valor gasto para realizar a viagem será R$ ${valorGasto.toFixed(2)}`) //toFixed converte o valor para texto e limita a número fixo de casas decimais, no caso o (2) especifica que o número deve ser exibido com 2 casas decimais.

