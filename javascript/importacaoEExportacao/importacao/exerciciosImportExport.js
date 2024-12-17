//uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 a 100
//faca um programa que receba os 5 numeros sorteados para cada alunos e mostre o maior numero sorteado

//dados de entrada: 5 50 10 98 23 - saida: 98

const { gets, print } = require("./funcoesAuxiliares");

//simplificando
const quantidadeDeAlunos = gets();

let maiorValor = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
  const numeroSorteado = gets();
  if(numeroSorteado > maiorValor){
    maiorValor = numeroSorteado
  }

}
print(maiorValor)

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
  const numeroSorteado = gets();
  numerosSorteados.push(numeroSorteado)
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {

  const numeroSorteado = numerosSorteados[i]
  if(numeroSorteado > maiorValor){
    maiorValor = numeroSorteado;
  }

}

print(maiorValor)

const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

r1.question('qual seu nome? ', (name) =>{
  console.log(`Olá, ${name}!`)
  r1.close();
})

const valores = [492,85,48.10,89.97,50,203.34,257.73 ]
let valorFinal = 0;
for(let i = 0; i < valores.length; i++){

  const valor = valores[i];
  valorFinal += valor

}
console.log(valorFinal)

//exercicio 1
//Faca um programa que receba a media de um aluno
//caso a media seja < 5 impriva reprovado
//caso a media seja >= 5 e < 7 imprima recuperação
//caso a media seja >= 7 imprima aprovado
//exemplo: entrada: 5.5 saida: recuperação.

const media = gets();

if(media >= 0 && media < 5){
  print(`Média: ${media} - Aluno reprovado!`)
}else if(media >= 5 && media < 7){
  print(`Média: ${media} - Aluno em recuperação!`)
}else if(media >= 7){
  print(`Média: ${media} - Aluno aprovado!`)
}else{
  print('Número Inválido')
}

//exercicio 2
// Faça um programa que receba N (quantidade de numeros) e seus respectivos valores
// impriva o maior numero par e o menor numero impar
// exemplo entrada: 5,3,4,1,10,8 saida: maior numero par: 10 menor impar: 1

const n = gets();
let maiorNumeroPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < n; i++) {
  const numero = gets();
  if (numero % 2 === 0) {
    if (maiorNumeroPar === null || numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
    }
  } else {
    if (menorNumeroImpar === null || numero < menorNumeroImpar) {
      menorNumeroImpar = numero;
    }
  }
}
print(`Maior número par: ${maiorNumeroPar}`);
print(`Menor número impar: ${menorNumeroImpar}`);

//faça um programa que calcule e imprima o salário a ser transferido para um funcionário
//para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios
//o salário a ser transferido e calculado da seguinte maneira:
//valor bruto do salário - percentual de imposto mediante faixa salarial + adiciona dos beneficios
//para calcular o percentual de imposto segue as aliquotas
//de R$ 0.00 a 1100.00 = 5.00%
//de R$ 1100.01 a 2500.00 = 10.00%
//maior que 2500.00 = 15.00%

const imposto = [5,10,15]
let calculoImposto = null;
function calculaSalario(salario, beneficios){
  if(salario <= 1100){
    calculoImposto = salario * (imposto[0] / 100)
    return (salario - calculoImposto) + beneficios;
  }else if(salario >= 1100.01 && salario < 2500){
    calculoImposto = salario * (imposto[1] / 100)
    return (salario - calculoImposto) + beneficios;
  }else{
    calculoImposto = salario * (imposto[2] / 100)
    return (salario - calculoImposto) + beneficios;
  }
}

console.log(calculaSalario(2500, 100))

const valorSalario = gets();
const valorBeneficio = gets();

function calcularPorcentagem(valor, percentual){
  return valor * (percentual / 100)
}

function pegarAliquota(salario){
  if(salario >= 0 && salario <= 1100){
    return 5;
  }else if(salario >= 1100.01 && salario <= 2500){
    return 10;
  }else{
    return 15;
  }
}

const aliquotaDoImposto = pegarAliquota(valorSalario);
const valorDoImposto = calcularPorcentagem(valorSalario, aliquotaDoImposto);

const valorATransferir = valorSalario - valorDoImposto + valorBeneficio;

print(valorATransferir);