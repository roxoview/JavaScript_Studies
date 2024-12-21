//js é uma linguagem case sensitive
//e é fracamente tipado
//declarando variável
var var1 = 10;
var var2 = '20'
//javascript n valida o tipo da variável

//hoisting - içamento
//em uma linguagem procedural a ordem de declaração importa.
//javascript faz o içamento de todas as declaraçao, jogando tudo para o começo do arquivo

//chamando a função acima da função declarada, devido ao hoisting - içamento isso é possível.
teste()

function teste(){
  console.log('teste')
}
// o hoisting se comporta diferente com variáveis declaradas
// ele joga as variáveis para cima sem atribuição, dando erro por não ter atribuição

teste1()
teste2()

var teste1 = function teste1(){
  console.log('teste1')
}

var teste2 = function teste2(){
  console.log('teste2')
}


