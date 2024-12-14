
//desvendando as funções gets e print
//node js é um runtime environment de código javascript server side.
//Runtime Environment:
// O Node.js fornece um ambiente para executar código JavaScript fora do navegador. Ele usa o motor V8, o mesmo motor JavaScript usado pelo Google Chrome, para interpretar e executar o código.

// Interpretação e Execução:
// O motor V8 não compila o JavaScript para um formato intermediário ou binário. Em vez disso, ele interpreta e executa o código diretamente, convertendo-o para instruções de máquina de forma otimizada enquanto executa.

// Lado do Servidor:
// Tradicionalmente, o JavaScript era usado apenas no navegador para criar interatividade em páginas da web. O Node.js expande isso, permitindo que JavaScript seja usado para desenvolver aplicativos no back-end, como servidores web, APIs, e até mesmo sistemas em tempo real.

//importação e exportação com javascript
//gets pega o input do usuario
//print é um console.log

//importando funcão com require() e module.exports = {nomeDaFuncao , nomeDaFuncao}
const funcoes = require('./importacao/funcoesAuxiliares')
console.log(funcoes.gets())



const {login, senha, qualquerCoisa} = require('./importacao/environments')

console.log(login)
console.log(senha)
console.log(qualquerCoisa)