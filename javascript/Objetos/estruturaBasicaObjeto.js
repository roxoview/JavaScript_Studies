//entendendo estrutura básica de um objeto
//o console.log é um objeto e o log é um método desse objeto.
//estrutura basica de um objeto literal -> tudo que está dentro é uma coleção de dados.
const objto = {
  nome: 'Romário',
  idade: 30,
  //método descrever, podemos usar os dados do objeto
  //o this é usado para referenciar o objeto em questão.
  descrever: function(){
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
  }
};
objto.descrever();

//objeto literal pode ser incrementado dinâmicamente.
objto.altura = 1.74;
console.log(objto)
//um objeto no javascript é uma coleção dinamica de chave e valor.
//podemos remover dados
delete objto.altura
console.log(objto)
//podemos utilizar funções também. normalmente chamado de método.

objto.descrever = function(){
  console.log(`inverti os dados ${this.idade} e ${this.nome}`)
}

objto.descrever()

//podemos acessar esses valores de uma forma mais dinâmica.
//acessando pela chave do objeto
console.log(objto['nome'])
//podemos também reatribuir
objto['nome'] = 'Novo nome'
console.log(objto['nome'])
