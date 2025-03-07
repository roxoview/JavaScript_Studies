//Entendendo sobrescrita e shadowing
//como funciona a sobrescrita 
//exemplo
//a propriedade mais proxima sera considerada
const pessoa = {
  idade: 18
}

const romario = {
  nome: 'Romario',
  idade: 30,
  __proto__: pessoa,
}

console.log(romario.idade)

//formas de criar objetos literais com prototipos
const romario1 = {
  nome: "Romario",
  __proto__: pessoa
}
console.log(romario1.idade)

//pode ser criado pelo metodo Object.create()
const romario3 = Object.create(pessoa)
console.log(romario3.idade)

//entendendo o operador new
function Pessoa(nome, idade){
  this.nome = nome
  this.idade = idade
}
//criando prototipo para o objeto pessoa
Pessoa.prototype.falar = function(){
  console.log(`Meu nome é ${this.nome} tenho ${this.idade} anos!`)
}
console.log(new Pessoa('Romario', 30))
const romario4 = new Pessoa('Romário', 30)
romario4.falar()

//pode ser invocado atraves do call
const romario5 = {
  genero: 'masculino'
}
//call está referenciando o objeto Pessoa
Pessoa.call(romario5, 'Romario 5', 50)
console.log(romario5)

//prototipo é o elemento/objeto com qual o novo objeto se baseia

//strings também tem prototipo
String.prototype.toPlang = function(){
  return `P ${this}`
}

console.log('teste'.toPlang())