//exercício 1 - criando classe carro
// 1 - crie uma classe para representar carros
// os carros possuem uma marca, uma cor e um gasto médio de combustivel por kilometro rodado
// 2 - Crie um método que dado a quantidade de quilometros eo preço do combustivel nos de o valor gasto em reais
// para realizar este percurso

class Carro {
  marca;
  cor;
  gastoMedioKMRodado;
  constructor(marca, cor, gastoPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioKMRodado = gastoPorKm;
  }
  valorGastoPorPercurso(distanciaEmKm, precoCombustivel) {
    return distanciaEmKm * this.gastoMedioKMRodado * precoCombustivel;
  }
}

const novoCarro = new Carro("Fiat Uno", "Preto", 1 / 12);
console.log(novoCarro);
console.log(novoCarro.valorGastoPorPercurso(70, 5));
const palio = new Carro("Fiat", "preto", 1 / 10);
console.log(palio.valorGastoPorPercurso(160, 5.9));
