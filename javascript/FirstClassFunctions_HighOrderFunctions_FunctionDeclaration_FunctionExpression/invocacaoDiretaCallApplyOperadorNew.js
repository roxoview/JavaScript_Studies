//Invocação direta, call, aplly e operador new

//invocação direta
function teste (){
  console.log('invocação direta, declaração explicita')
}
//invocação direta 
// teste()


//call e apply para invocar a função


//metodo apply -> invocação indireta
const pessoa = {
  nome: 'Romario',
  idade : 30
}

function gritar(prefixo, prefixo2){
  console.log(prefixo, this.nome)
}

//execução direta
gritar('Oláaaa')
//primeiro passamos o contexto e depois os atributos da função
gritar.apply(pessoa, ['Olaaa'])

//metodo call-> invocação indireta
//o resultado é igual, com a diferença que não recebe um array e sim o argumento direto
gritar.call(pessoa, 'Olaaaaa')

//operador new
//passa o contexto para a função e retorna um objeto pronto
const pessoa2 = {
  nome: 'Romario',
  idade: 30,
  falar: function(frase, nome){
    this.nome = nome;
    console.log(`${frase}, ${this.nome}`)
  }
}
//instanciando com o new
new pessoa2.falar('Olá', 'Romário')
