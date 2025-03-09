//Async e Await
//uma forma diferente de usar o then, catch e finaly
const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')


//async await
//para usar async await precisamos de uma função async
// async function buscarArquivo(){
//   try{
//     const arquivo = await fs.promises.readFile(filePath)
//     const textoDoArquivo = arquivo.toString('utf8')
//     console.log(textoDoArquivo)
//   }catch(error){
//     console.error('Erro: ', error.message)
//   }

// }
// buscarArquivo()


//exemplo de async await function que faz uma requisição get na API 
async function getCharacter(name){
  const url = `https://api.tibiadata.com/v4/character/${name}`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Erro na API: Status - ${response.status} ${response.statusText}`);
    }

    // 🔹 Captura o JSON da resposta
    const data = await response.json();

    // 🔹 Verifica se 'characters' e 'character' existem antes de acessar
        if (!data.character || !data.character.character) {
            throw new Error("Personagem não encontrado na resposta da API.");
        }
        // 🔹 Desestruturação para acessar diretamente o nome
        const { character } = data.character;
        const { name: characterName, level: characterLevel, vocation } = character;
        //name e level estão sendo renomeadas
    console.log(`Nome: ${characterName}`);
    console.log(`Level: ${characterLevel}`);
    console.log(`Vocação: ${vocation}`);

    return character; // Retorna o nome do personagem
} catch (e) {
    console.error("Erro ao buscar personagem:", e.message);
}
}

getCharacter('roshoc')