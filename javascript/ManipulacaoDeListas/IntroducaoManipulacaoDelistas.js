//Introdução a manipulação de listas com JS
lista = [1,2,3,4,5,6,7,8,9,10]

//existem alguns metodos que podemos utilizar para manipular listas Arrays

// Método - função foreach
// é uma forma de percorrer a lista orientada a funções
// um callback fuction, um número, um index e um array
//sintaxe
//forEach é mais lento que o for tradicional.
//é uma forma reduzida de percorrer a lista
lista.forEach((value, i, listref) =>{
  console.log(value)
})

//Método - função filter
//predicate function - função de julgamento
//percorre a lista e retorna se o elemento se mantém ou não
//percorre a lista e retorna uma nova lista baseada na anterior
const listaDeNumerosPares = lista.filter((element, i, listRef) =>{
  return (element % 2 === 0)
})
console.log(listaDeNumerosPares)
//filtrando nomes com inicial A
const nomes = ['Amanda','Bruna','Maiara','Ana','Beatriz','Ananda']
const listaDeNomesComA = nomes.filter((element, i, listRef)=>{
  return element.includes('A')
})
console.log(listaDeNomesComA)

//Método Map - função map
//função que transforma um elmento em outro, gerando uma nova lista
//recebe elemento, indice, e referência
//no exemplo abaixo, usamos o map para transformar uma lista de objetos pessoa, em uma nova lista de nomes 
class Pessoa {
  constructor(nome){
    this.nome = nome
  }
}

const listaDePessoas = [new Pessoa('Romário'),new Pessoa('Maria'),new Pessoa('José'),new Pessoa('Igor')]
//usando o map para transformar uma lista de objeto pessoa em uma lista de nomes desses objetos
const listaDeNomesPessoa = [] //nova lista só de nomes
listaDePessoas.map((element, i) =>{
  listaDeNomesPessoa.push(element.nome)
})
console.log(listaDeNomesPessoa)
//sintaxe reduzida
const listaDeNomes2 = listaDePessoas.map((element)=> element.nome)
console.log(listaDeNomes2)
//podemos utilizar o map para transformar em uma lista em HTML também
const listaHTML = listaDePessoas.map((element)=>{
  return `
      <li>${element.nome}</li>
  `
})
console.log(listaHTML)

//Método - função reduce
//reduce percorre a lista e transforma a lista em um único valor.
const listaReduce = [1,2,3,4,5,6,7,8,9,10]
//callback recebe o previus value, current value, current index e lista
const somaDeTodosOsNumeros = lista.reduce((previus, current) =>{
  return previus + current
})//podemos passar um valor inicial

console.log(somaDeTodosOsNumeros)
//exemplo de reduce
//contador de ocorrências
// O acumulador está vazio: {}.
// Verificamos se acumulador['maçã'] existe. Como não existe, ele usa 0 (por causa do || 0).
// Depois, soma 1 e armazena no objeto:
const frutas = ['Banana','Uva','Maçã','Banana','Maçã','Uva','Pêra','Banana','Morango']
const contagem = frutas.reduce((acumulador, fruta)=>{
  acumulador[fruta] = (acumulador[fruta] || 0) + 1
  return acumulador
},{})
console.log(contagem)
// Resumo final
// O .reduce() percorre cada item do array.
// Se a fruta já existe no acumulador, incrementa o valor.
// Se não existe, cria a chave no objeto e inicia com 1.
// No final, temos um objeto com a contagem de cada fruta.


// Podemos simplificar um pouco mais o código usando um operador ternário ? ::

// javascript
// Copiar
// Editar
// const contagem = frutas.reduce((acumulador, fruta) => {
//     acumulador[fruta] ? acumulador[fruta]++ : acumulador[fruta] = 1;
//     return acumulador;
// }, {});
// Aqui, verificamos diretamente se a fruta já existe:
// Se sim, incrementamos (acumulador[fruta]++).

//outro exemplo com nomes
const nomesRepetidos = ['Romário','Maria','Ana','Vitoria','Ana','Maria','Romário','Ana']
const contagemNomes = nomesRepetidos.reduce((acumulador, nome)=>{
   acumulador[nome] ? acumulador[nome]++ : acumulador[nome] =  1 
   return acumulador
},{})
//precisamos lembrar de colocar o valor inicial, no caso um objeto vazio, que será populado com essa contagem
console.log(contagemNomes)

//Join e combinação de funções de manipulação
const listaJoin = [1,2,3]
//join é como se fosse um juntar, junta os elementos
console.log(listaJoin.join('-'))
//no exemplo acima eu pego a listaJoin e transformo em uma nova lista separando por -
//podemos combinar métodos com o join
//no exemplo baixo pego o nome de cada objeto na lista e junto em uma nova lista separando por ponto e virgula
listaDeObjetosNome = [{nome:'Romário'},{nome:'Maria'},{nome:'Gustavo'},{nome:'José'},{nome:'Ricardo'},]
const nomesSeparadosJoin = listaDeObjetosNome.map((e) => e.nome).join('; ')
console.log(nomesSeparadosJoin)
//utilizando map e filter e join
console.log(
  listaDeObjetosNome.map(e => e.nome)
  .filter((e) => e.startsWith('R'))
  .join(' - '))

  //utilizando filter para filtrar nomes especificos, map para mapear em uma nova lista e join para juntar
  const nomesListaEmHtml = listaDeObjetosNome.filter((e) => e.nome.startsWith('R')).map(
    e => `<li>${e.nome}</li>`)
    .join('')
  
    console.log(nomesListaEmHtml)

    