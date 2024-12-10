// Faça um programa para calcular o valor de uma viagem.
// você terá 5 variáveis. sendo elas:
// 1 - Preço do etanol
// 2 - Preço da gasolina
// 3 - Tipo de combustível do carro por KM
// 4 - Gasto médio de combustível do carro por KM
// 5 - Distâcia em KM da viagem
// Imprima no console o valor que será gasto para realizar esta viagem.

const precoEtanol = 4.7;
const precoGasolina = 5.8;
const tipoCombustivel = "GASOLINA";
const gastoMedioCombustivelPorKM = 10.6;
const distEmKM = 1000;

const listrosConsumidos = distEmKM / gastoMedioCombustivelPorKM;
let valorViagem = 0;

//código refatorado clean code
// let precoPorLitro = tipoCombustivel.toLowerCase() === 'gasolina' ? precoGasolina : precoEtanol;
// let valorViagemRefatorada = (distEmKM / gastoMedioCombustivelPorKM) * precoPorLitro;
// console.log(`O valor da viagem utilizando ${tipoCombustivel} será de R$ ${valorViagemRefatorada.toFixed(2)}`);

if (tipoCombustivel.toLowerCase() == "gasolina") {
  valorViagem = listrosConsumidos * precoGasolina;
  console.log('resposta exercício 1 ' + valorViagem.toFixed(2));
} else {
  valorViagem = listrosConsumidos * precoEtanol;
  console.log('resposta exercício 1 ' + valorViagem.toFixed(2));
}

//Exercício médias de nota - praticando variáveis, operadores e estruturas de condicionais
// faça um algorítomo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule
// e imprima a sua média e sua classificação conforme a tabela abaixo. 

// média = (nota 1 + nota 2 + nota 3) / 3;

// classificação:
// - média menor que 5, reprovação;
// - média entre 5 e 7, recuperação;
// - média acima de 7, passou de semestre;


const nota1 = 7;
const nota2 = 10;
const nota3 = 9;

const media = (nota1 + nota2 + nota3) / 3;
console.log(media.toFixed(2))

if(media < 5){
  console.log('resposta exercício 2 ' + `Aluno ficou com ${media.toFixed(2)} de média, infelizmente foi reprovado!`);
}else if(media >= 5 && media <= 7){ // Não é necessário repetir a condição `media >= 5` então pode ser refatorado por <=7
  console.log('resposta exercício 2 ' + `Aluno ficou com ${media.toFixed(2)} de média, está em recuperação`);
}else{
  console.log('resposta exercício 2 ' + `Aluno ficou com ${media.toFixed(2)} de média, parabéns, passou de semestre!`);
}

//exercício calculadora de IMC
// Indice de massa corporal é um critério da organização mundial de saude para dar uma indicação
// sobre a condição de peso de uma pessoa adulta.

// Formula do IMC
// IMC = peso/(altura * altura)

// elabore um algorítmo que dado o peso e altura de um adulto mostre sua condição de acordo com a tabela abaixo. 

// IMC em adultos condição 
// - Abaixo de 18.5 abaixo do peso 
// - Entre 18.5 e 25 peso normal 
// - Entre 25 e 30 acima do peso 
// - entre 30 e 40 obeso 
// - acima de 40 obesidade grave 

const peso = 147;
const altura = 1.74;

const imc = peso / Math.pow(altura, 2); // const maiúscula é um magic number, um valor constante que não muda de fato.
//para utilizar ao quadrado, ao cubo utilizar Math.pow, math é uma biblioteca nativa do js, pow é uma função(método) dessa biblioteca



if(imc < 18.5){
  console.log('resposta exercício 3 ' + `IMC: ${imc.toFixed(2)} - abaixo do peso`)
}else if(imc <= 25){
  console.log('resposta exercício 3 ' + `IMC: ${imc.toFixed(2)} - peso normal`)
}else if(imc <= 30){
  console.log('resposta exercício 3 ' + `IMC: ${imc.toFixed(2)} - acima do peso`)
}else if(imc <= 40){
  console.log('resposta exercício 3 ' + `IMC: ${imc.toFixed(2)} - obeso`)
}else if(imc > 40){
  console.log('resposta exercício 3 ' + `IMC: ${imc.toFixed(2)} - obesidade grave`)
}


// Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal
// de etiqueta e a escolha da condição de pagamento.
// Utilize os códigos da tabela a sguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

// código condição de pagamento
// -À vista débito, recebe 10% de desconto
// -À vista no dinheiro ou pix, recebe 15% de desconto 
// -Em duas vezes, preço normal de etiqueta sem juros
// -Acima de duas vezes, preço normal de etiqueta mais juros de 10%

const precoProduto = 769.49;
const tipoPagamentoEscolhido = 'parcelado'
const descontoDebito = (precoProduto / 100) * 10;
const descontoPix = (precoProduto / 100) * 15;
const parcelaSemJuros = precoProduto / 2;
const jurosParcelado = (precoProduto/100) * 10;


if(tipoPagamentoEscolhido === 'pix'){
  console.log(`Preço final com desconto de 15%: ` + (precoProduto - descontoPix).toFixed(2))
}else if(tipoPagamentoEscolhido === 'debito'){
  console.log(`Preço final com desconto de 10%: ` + (precoProduto - descontoDebito).toFixed(2))
}else if(tipoPagamentoEscolhido === '2x sem juros'){
  console.log(`Preço final em 2x sem juros: ${parcelaSemJuros}.toFixed(2`)
}else if(tipoPagamentoEscolhido === 'parcelado'){
  console.log(`Preço final com juros de 10%: ` + (precoProduto + jurosParcelado).toFixed(2))
}else{
  console.log('Pagamento não aprovado!');
}