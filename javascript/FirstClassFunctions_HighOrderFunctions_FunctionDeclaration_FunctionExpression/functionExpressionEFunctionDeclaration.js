//Function expressions e functions declarations
nomeDaFuncao()
//nomeDeOutraFuncao()
//declarando function declaration -> mais utilizada
function nomeDaFuncao(){
  console.log('sofre hoisting')
}

//declarando function expression
const nomeDeOutraFuncao = function(){
  console.log('não sofre hoisting')
}


//a diferença é o hoisting
// a function declaration é uma unidade só, quando o script é executado, ele sofre o hoisting e vai pro começo
//todas as declarações são jogadas para o inicio do script
//no caso da function expression, a declaração é jogada para cima, mas a atribuição fica no mesmo lugar, dependendo
//de como foi escrito o código pode gerar erros.
//então se for executar a funcão antes da atribuição, ela dara erro undefined.
// a function declaration iria funcionar, pois a declaração e atribuição sofrem o hoisting.



