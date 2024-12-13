//crie uma classe para representar uma pessoa
//para cada pessoa teremos os atributos nome, peso e altura
//as pessoas devem ter a capacidade de dizer o valor do seu IMC (imc = peso/ (altura * altura))
//instancie uma pessoa chamada jose que tenha 70kg de peso e 1,75 de altura e peça ao jose para dizer o valor do seu IMC

class Pessoa{
  nome;
  peso;
  altura;
  constructor(nome, peso, altura){
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }
  dizerImc(){
    return this.peso / (this.altura * this.altura);
  }
  classificarImc(){
    const imc = this.dizerImc();
    if (imc < 18.5) {
      return `IMC: ${imc} - abaixo do peso`;
    } else if (imc <= 25) {
      return `IMC: ${imc} - peso normal`;
    } else if (imc <= 30) {
      return `IMC: ${imc} - acima do peso`;
    } else if (imc <= 40) {
      return `IMC: ${imc} - obeso`;
    } else if (imc > 40) {
      return `IMC: ${imc} - obesidade grave`;
    }
  }
}

const jose = new Pessoa('Jose', 70, 1.75);
console.log(jose.dizerImc())
console.log(jose.classificarImc())

const maria = new Pessoa('Maria', 50, 1.56);
console.log(maria.dizerImc())
console.log(maria.classificarImc())

const victor = new Pessoa('Victor', 130, 1.60);
console.log(victor.dizerImc())
console.log(victor.classificarImc())
