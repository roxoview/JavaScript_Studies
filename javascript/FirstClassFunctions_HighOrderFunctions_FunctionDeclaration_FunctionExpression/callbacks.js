//Callbacks
//callback em JavaScript são funções passadas como argumento para outra função e executadas posteriormente,
//  geralmente após um evento ou um processo assíncrono. Elas são muito utilizadas para controle de fluxo
//  e programação assíncrona.

// function adicao(x,y){
//   return x + y
// }
// function multiplicacao(x,y){
//   return x * y
// }
// function divisao(x,y){
//   return x / y
// }
// function subtracao(x,y){
//   return x - y
// }
// function calculadora(x, operacao, y){
//   console.log(operacao(x,y))
// }

// calculadora(10, adicao, 10)
// calculadora(10, multiplicacao, 10)
// calculadora(10, subtracao, 10)

// Exemplo básico de callback
// javascript
// Copiar
// Editar
// function saudacao(nome, callback) {
//     console.log("Olá, " + nome);
//     callback();
// }

// function mostrarMensagem() {
//     console.log("Seja bem-vindo!");
// }

// saudacao("Lucas", mostrarMensagem);
// 🔹 Explicação:

// A função saudacao recebe um nome e uma função callback.
// Ela exibe uma mensagem com o nome e, em seguida, chama a callback, que imprime "Seja bem-vindo!".
// 🔹 Callback em funções assíncronas
// Callbacks são muito usados em operações assíncronas, como setTimeout ou requisições AJAX.

// javascript
// Copiar
// Editar
// console.log("Início");

// setTimeout(function () {
//     console.log("Isso aparece depois de 2 segundos.");
// }, 2000);

// console.log("Fim");
// 🔹 Explicação:

// O setTimeout recebe uma função e um tempo (2 segundos) e executa essa função após esse tempo.
// Enquanto isso, o código continua rodando, exibindo "Fim" antes da mensagem do setTimeout.
// 🔹 Callbacks em funções que manipulam arrays
// O método .map() usa callbacks para transformar cada elemento do array.

// javascript
// Copiar
// Editar
// const numeros = [1, 2, 3, 4];

// const dobrados = numeros.map(function (numero) {
//     return numero * 2;
// });

// console.log(dobrados); // [2, 4, 6, 8]
// 🔹 Explicação:

// O .map() aplica a função callback a cada elemento do array, retornando um novo array com os valores modificados.
// 🔹 Problema dos Callbacks Aninhados (Callback Hell)
// Quando muitos callbacks são usados em sequência, o código pode ficar difícil de entender.

// javascript
// Copiar
// Editar
// function buscarDados(callback) {
//     setTimeout(() => {
//         console.log("Buscando dados...");
//         callback();
//     }, 1000);
// }

// function processarDados(callback) {
//     setTimeout(() => {
//         console.log("Processando dados...");
//         callback();
//     }, 1000);
// }

// function exibirResultados() {
//     setTimeout(() => {
//         console.log("Exibindo resultados.");
//     }, 1000);
// }

// // Chamando as funções em sequência
// buscarDados(() => {
//     processarDados(() => {
//         exibirResultados();
//     });
// });
// 🔹 Problema: Código fica indentado demais e difícil de ler.
// 🔹 Solução: Usar Promises ou async/await, que tornam o código mais organizado.

// 🔹 Alternativa Melhor: Usando Promises
// javascript
// Copiar
// Editar
// function buscarDados() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Buscando dados...");
//             resolve();
//         }, 1000);
//     });
// }

// function processarDados() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Processando dados...");
//             resolve();
//         }, 1000);
//     });
// }

// function exibirResultados() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Exibindo resultados.");
//             resolve();
//         }, 1000);
//     });
// }

// buscarDados()
//     .then(processarDados)
//     .then(exibirResultados);
// 🔹 Vantagens das Promises:
// ✅ Código mais legível
// ✅ Evita aninhamento excessivo

// Se quiser, posso te explicar async/await, que melhora ainda mais a organização. 🚀

