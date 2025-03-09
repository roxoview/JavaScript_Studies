//manipulando arquivos através de promises

//importando o módulo fs (file system)
// O módulo fs (File System) é um módulo nativo do Node.js para manipulação de arquivos.
// Ele permite ler, escrever, criar e deletar arquivos e diretórios.
const fs = require('fs')
//quando o arquivo está em uma pasta diferente, podemos utilizar o path como boa prática
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

// Lendo um arquivo de forma assíncrona usando fs.promises.readFile
// const promessaDeLeituraArquivo = fs.promises.readFile('tarefas.csv')
// Aqui, o método fs.promises.readFile('tarefas.csv') lê o arquivo "tarefas.csv" de forma assíncrona.
// Ele não bloqueia a execução do código enquanto o arquivo está sendo lido.
// Ele retorna uma Promise, ou seja:
// Se a leitura for bem-sucedida, a Promise será resolvida (resolve) com o conteúdo do arquivo.
// Se houver um erro (como o arquivo não existir), a Promise será rejeitada (reject) com um erro.

const promessaDeLeituraArquivo = fs.promises.readFile(filePath)
//forma direta
// const promessaDeLeituraArquivo = fs.promises.readFile('tarefas.csv')


// Tratamento da Promise com .then()
// Quando a Promise é resolvida (ou seja, a leitura do arquivo foi concluída), a função dentro do .then() é executada.
// O parâmetro arquivo contém o conteúdo do arquivo em formato de Buffer (um formato binário).
// Como queremos um texto legível, usamos: arquivo.toString('utf8')

promessaDeLeituraArquivo.then((arquivo) =>{  
  console.log(arquivo.toString('utf8'))
})
// catch() para tratar erros Agora, se houver um erro, ele será capturado pelo .catch() e exibido no console.
.catch((erro)=>{
  console.error('Erro ao ler o arquivo: ', erro.message)
})

//utilizando métodos de manipulação de lista junto com promises
// fs.promises.readFile(filePath): Lê o arquivo de forma assíncrona e retorna uma Promise contendo um Buffer (dados binários do arquivo).
const promessaDeNovaLeitura = fs.promises.readFile(filePath)


promessaDeNovaLeitura
.then((arquivo) => arquivo.toString('utf8'))
.then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
.then((linhasSemCabecalho) => linhasSemCabecalho.map((linha) =>{
  const [nome, feito] = linha.split(';')
  return {
    nome,
    feito: feito.trim() === 'true'
  }
}))
.then((listaDeTarefas) => console.log(listaDeTarefas))
.catch((e) => console.error('Error: ', e.message))


// Converter o conteúdo do arquivo para string

// .then((arquivo) => arquivo.toString('utf8'))
// Como fs.promises.readFile() retorna um Buffer, precisamos convertê-lo para string usando .toString('utf8').

// 🔹 Saída esperada (texto legível):
// nome;feito
// Lavar roupa;true
// Estudar JavaScript;false
// Fazer compras;true

// 3️⃣ Separar o texto em linhas e remover o cabeçalho
// .then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
// .split('\n'): Divide o texto em um array de linhas.
// .slice(1): Remove o cabeçalho (a primeira linha do CSV).
// 🔹 Saída esperada (array sem cabeçalho):
// [
//   'Lavar roupa;true',
//   'Estudar JavaScript;false',
//   'Fazer compras;true'
// ]


// 4️⃣ Transformar cada linha em um objeto
// .then((linhasSemCabecalho) => linhasSemCabecalho.map((linha) =>{
//   const [nome, feito] = linha.split(';') // Separa os valores pelo ";"
//   return {
//     nome,
//     feito: feito.trim() === 'true' // Converte "true" para booleano
//   }
// }))
// .split(';'): Divide a linha em duas partes → "nome" e "feito".
// feito.trim() === 'true': Converte a string "true" para o valor booleano true.
// 🔹 Saída esperada (array de objetos)
// [
//   { nome: 'Lavar roupa', feito: true },
//   { nome: 'Estudar JavaScript', feito: false },
//   { nome: 'Fazer compras', feito: true }
// ]


// 5️⃣ Exibir a lista no console
// .then((listaDeTarefas) => console.log(listaDeTarefas))
// Exibe no console o array de objetos formatado.


// 6️⃣ Capturar erros
// .catch((e) => console.error('Error: ', e.message))
// Se ocorrer algum erro na leitura do arquivo, o .catch() captura e exibe a mensagem de erro.
