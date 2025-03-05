//tipo de dados

//tipos primitivos - são imutáveis
//boolean
//null
//undefined
//number
//string
//synbol


//tipo de dado - objetos, objetos possuem alguns métodos.
//object


//conversão coerção de tipo de dado
//type coercion (exolicita ou implicita)
//a coerção pode ser explicita, quando o dev converte propositalmente, ou implicita, 
// quando o javascript converte o tipo automáticamente como no exemplo abaixo
console.log('10' + 10)

//saida: 1010, converteu para o tipo string pois nesse caso o operador + está concatenando e não somando.

//Wrappers, coerção de tipos, boolean, null e undefined.

//Durante a execução do script é que os tipos vão sendo resolvidos dinamicamente.
//exemplo
let x = 10;
x = 'texto'
console.log(x)
//no exemplo acima, podemos alterar o tipo a qualquer momento, pois a variável let permite isso, e a coerção é feita automáticamente

//object é um tipo mutável, além disso carrega alguns métodos que podem ajudar.
// a maioria dos tipos primitivos possuem wrappers
//exemplo true, false (boolean)
// new Boolean(true) -> wrapper

//coerção de tipo de dados
console.log(10 - '10')


//comparação 
console.log(10 == '10') // -> desconsidera o tipo para comparar
console.log(10 === '10') // -> considerando o tipo

//boolean
//true e false

const nome = '';
if(!nome){ //negando ~!~
  console.log('preenchido')
}
console.log(10 > 20)

//null ausência de valor
//undefined inexistência de valor ou ausência de definição
const d = null;
console.log(d)
let p;
console.log(p)

const obj = {nome: null}
console.log(typeof(obj))
console.log(JSON.stringify(obj))

//Números, strings e symbol
//+infinity, -infinity e NaN
//Double Precision 64-bit binary format IEEE 754 //decimalJS resolve o problema de operações binarias

//strings
//existem 3 formas de declarar strings ""(aspas duplas), ''(aspas simples), ``(template literals)

//objeto literal
// const pessoa = {
//   nome: 'Romário',
//   falar: function(){
//     console.log(`Meu nome é ${this.nome}`)
//   }
// }
// console.log(typeof obj2)

// obj2.nome = 'Romário'
// console.log(obj2.nome)

// obj2.idade = 30
// console.log(obj2.idade) //referenciando o objeto
// console.log(obj2['nome']) //indice valor

// obj2['nome'] = 'Mario'
// console.log(obj2.nome)


// //podemos declarar função dentro de um objeto, o contexto this refere-se ao objeto
// obj2.falar = function(){
//   console.log(`Meu nome é ${this.nome}`)
// }

// obj2.falar()

// const f = pessoa.falar
// pessoa.falar()

//f() //perde o contexto do objeto

``` if (true) { var passouPorAqui = 'SIM'; } console.log(passouPorAqui); ```
