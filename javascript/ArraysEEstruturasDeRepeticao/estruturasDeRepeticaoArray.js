//Estruturas de repetição.
//percorrendo lista dinâmicamente
//estrutura de repetição for
const notas = []
notas.push(4)
notas.push(6)
notas.push(6)
notas.push(8)
notas.push(8)
notas.push(6)

// sintaxe declaração da variável i (variavel de incremento), condição para incremento, incremento
let soma = 0;
for(let i = 0; i < notas.length; i++){
  const nota = notas[i]
  soma = soma + nota;
}
//for em uma string, itera sobre a string e exibe cada caractere da string
// const nome = 'Romário Oliveira'

// for(let f = 0; f < nome.length; f++){
//   console.log(nome[f])
// }

const media = soma / notas.length
console.log(media)