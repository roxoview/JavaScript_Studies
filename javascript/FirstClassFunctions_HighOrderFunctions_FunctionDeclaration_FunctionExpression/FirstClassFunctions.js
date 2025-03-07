//First Class Functions
//High Order Functions
//As funções do js são first class e high order functions
//pode ser atribuida a uma variavel, pode ser passada como parâmetro e retornada como resposta.
//Para invocar uma função precisamos somente referenciar ela, o nome é um mero detalhe.

function falarMeuNome(){
  console.log('Meu nome é Romário')
}

const referenciaNova = falarMeuNome

referenciaNova()


//função como parametro
function falarMeuNomeCompleto(falarMeuNome){
  falarMeuNome()
  console.log('Oliveira')
  return falarMeuNome
}

falarMeuNomeCompleto(falarMeuNome)()

//as funções acabam virando objeto.
