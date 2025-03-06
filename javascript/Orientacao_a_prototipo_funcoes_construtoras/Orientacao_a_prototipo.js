//Orientação a protótipo e funções construtoras.
//Prototype
//orientação a protótipo

//objeto é uma coleção dinamica de chave e valor
const pessoa = {
genero : 'masculino'

}

const romario = {
  nome: 'Romario',
  idade: 30,
  __proto__: pessoa
}

console.log(romario.genero)

//herança no js é com base no protótipo
//no exemplo acima, o objeto romario herda propriedades do objeto pessoa pelo atributo __proto__, quando eu tento acessar
//um valor que não existe no objeto romario, o javascript ai procurar esse valor no objeto herdado no caso pessoa

//funções construtoras
//funções construtoras começa com letra maiuscula
// function Pessoa(nome, idade){
//   this.nome = nome;
//   this.idade = idade;
// }

//instanciando
// const romario1 = new Pessoa('Romário', 30)
// console.log(romario1)

//podemos usar .prototype para prototipar uma propriedade
// Pessoa.prototype.falar = function(){console.log(`Meu nome é: ${this.nome}`)}

//nesse caso usei prototype para adicionar uma função no objeto pessoa, e o objeto romario1 herda essa função
// romario1.falar()

//hoje em dia é mais usado o class e constructor
class Pessoa{
  constructor(nome, idade){
    this.nome = nome;
    this.idade = idade
  }
  falar(){
    console.log(`Meu nome é: ${this.nome} e tenho ${this.idade} anos!`)
  }
}
const romario2 = new Pessoa('Romário 2', 30)
romario2.falar()