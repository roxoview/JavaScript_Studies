//Assincronismo com promises
//assincronismo é quando queremos fazer alguma coisa que não irá ser executado imediatamente.
//em algum momento essa tarefa vai terminar e recebemos o retorno.
//função assincrona não temos controle, temos a promessa de que em algum momento teremos o retorno.
//promise -> promessa de que em algum momento devolverá o retorno.
//criando uma promessa
//sintaxe
const promessaNumeroQualquer = new Promise((resolve, reject) => {
  //simulando assincronismo com setTimeout -> depois de 1 segundo ele retorna a promessa
  setTimeout(() => {
    const numero = parseInt(Math.random() * 100);
    resolve(numero);
  }, 1000);
  //...
  //...
  //...
  //se der certo chama o resolve
  //resolve()
  ///se der errado chama o reject
  //reject()
});
//then é o que retorna da promessa se der sucesso
//catch é o retorno da promessa caso der erro
//finaly independente de erro ou sucesso, vai executar

//podemos encadiar os then
// promessaNumeroQualquer
//   .then((value) => {
//     console.log(`valor puro: ${value}`);
//     return value + 10;
//   })
//   .then((value) => {
//     console.log(`+10: ${value}`);
//     return value + 10
//   })
//   .then((value) =>{
//     console.log(`+10: ${value}`);
//   })
//   .catch((error) => {
//     console.log("Error Desc: ", error);
//   })
//   .finally(() => {
//     console.log("Finalizou!");
//   });
//promisse é uma forma universal de lidar com assincronismo
//e then é uma forma universal de manipular esse sincronismo

//exemplo real
//
// Exemplo real de Promise com resolve e reject
// Vamos criar um exemplo realista simulando um sistema de login. A Promise verificará se o usuário e a senha estão corretos e retornará uma mensagem de sucesso (resolve) ou erro (reject).


function login(usuario, senha) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const usuariosValidos = [
              { usuario: 'admin', senha: '1234' },
              { usuario: 'user', senha: 'abcd' }
          ];

          // Verifica se o usuário e a senha são válidos
          const usuarioEncontrado = usuariosValidos.find(
              (u) => u.usuario === usuario && u.senha === senha
          );

          if (usuarioEncontrado) {
              resolve(`Bem-vindo, ${usuario}! Login realizado com sucesso.`);
          } else {
              reject(new Error('Usuário ou senha inválidos!'));
          }
      }, 2000); // Simula um tempo de resposta do servidor
  });
}

// Testando a função login
login('admin', '1234')
  .then((mensagem) => {
      console.log(mensagem); // "Bem-vindo, admin! Login realizado com sucesso."
  })
  .catch((erro) => {
      console.error(erro.message); // "Usuário ou senha inválidos!"
  });

login('user', 'errado')
  .then((mensagem) => {
      console.log(mensagem);
  })
  .catch((erro) => {
      console.error(erro.message); // "Usuário ou senha inválidos!"
  });