//funções são pequenos trechos de código que podemos executar quando necessário, a qualquer momento.

// function teste(){
//   console.log('teste');
// }

// //uma vez declarada, pode ser referenciada a qualquer momento.
// teste()
// //funções podem receber parâmetros também.
// function sayMyName(name){
//   console.log('Your name is: ' + name)
// }
// sayMyName('Romário')

// //existem funções que não devolvem nada, e são chamadas de procedimentos, pois não tem retorno.
// function quadrado(valor){
//   return valor * valor; //return devolve o valor 
// }
// const quadradoDeDez = quadrado(10);
// console.log(quadradoDeDez)

// //exemplo de função que calcula juros
// function incrementarJuros(valor,percentualJuros){
//   const valorDeAcrecimo = (percentualJuros / 100) * valor;
//   return valor + valorDeAcrecimo;
// }
// console.log(incrementarJuros(100,10))

//como melhor organizar os códigos
//nosso código principal colocaremos dentro de uma função chamada main.
function main(){
  console.log('Programa principal');
}
main()

//e fora da main, criaremos funções que precisamos, para poder utilizar dentro da main.
//pegamos o exercicio do IMC e vamos quebrar em funções.
