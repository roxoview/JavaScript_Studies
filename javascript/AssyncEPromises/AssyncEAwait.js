//Async e Await
//uma forma diferente de usar o then, catch e finaly
const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')


//async await
//para usar async await precisamos de uma função async
async function buscarArquivo(){
  try{
    const arquivo = await fs.promises.readFile(filePath)
    const textoDoArquivo = arquivo.toString('utf8')
    console.log(textoDoArquivo)
  }catch(error){
    console.error('Erro: ', error.message)
  }

}
buscarArquivo()