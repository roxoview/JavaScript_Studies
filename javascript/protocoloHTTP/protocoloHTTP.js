//protocolo HTTP trata-se de trocar informações entre cliente e servidor
//cliente faz um pedido, servidor processa e devolve a resposta
//URL path e method
//path é o ip e porta do servidor + o endereço do recurso que estamos acessando
//URL: https://pokeapi.co/docs/v2#pokemon
                  //^           ^
                // |            |
//             ${ip}    /$path = caminho de identificação do recurso
// ip: https://pokeapi.co -> ip direto
// http://127.0.0.1:3000 -> ip e porta

//identificação do recurso
// /docs/v2#pokemon

//tipo de solicitação = request method: POST, GET, DELETE, PUT, PATCH e outras.
//GET = busca recursos
//POST = INSERE recursos
//PUT = Atualiza recursos
//DELETE = deleta recursos
// PATCH = atualiza parcilamente recursos(com base nos campos passados), diferente do put que atualiza totalmente

//toda requisição para um recurso o método diz o que queremos fazer nesse rcurso, principalmente em projetos REST.
