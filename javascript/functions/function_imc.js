function calcularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
  if (imc < 18.5) {
    return `IMC: ${imc} - abaixo do peso`;
  } else if (imc <= 25) {
    return `IMC: ${imc} - peso normal`;
  } else if (imc <= 30) {
    return `IMC: ${imc} - acima do peso`;
  } else if (imc <= 40) {
    return `IMC: ${imc} - obeso`;
  } else if (imc > 40) {
    return `IMC: ${imc} - obesidade grave`;
  }
}

//função não nomeada, imediatamente invocada, essa função só existe nesse bloco.
//bastante usado em desenvolvimento web. isola o escopo, uma vez que a função vai ser executada apenas uma vez
(function () {
  const peso = 147;
  const altura = 1.74;
  const imc = calcularImc(peso, altura).toFixed(2); // Calcula o IMC e arredonda para 2 casas decimais
  console.log(classificarImc(parseFloat(imc))); // Converte a string `imc` de volta para número
})();


//funções podem receber novas funções.
// main = function(){
//   console.log('nova function')
// }


//funções invocadas imediatamente.
// podemos envolver a function por parenteses e invoca-las imediatamente após a execução.
// (function funcaoImediata(){
//   console.log('resolve e executa imediatamente após')
// })();

