//o que é object destructuring
const funcoes = require('./importacao/funcoesAuxiliares')

//a função gets retorna um valor
// a função print da um console.log no argumento passado
//quando eu desestruturo o objeto module.exports e passo gets e print
const {gets, print} = require('./importacao/funcoesAuxiliares')

print(gets())