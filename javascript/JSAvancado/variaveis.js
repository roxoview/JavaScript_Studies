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



var teste1 = function teste1(){
  console.log('teste1')
}

var teste2 = function teste2(nome){
  console.log(nome + ' teste2')
}

teste1()
teste2('Romário')

//diferenças entre var, let e const
//antes do ECMAscript 6 declarava-se variaveis com var, o que causa efeitos colaterais como o hoisting
//var escopo funçoes e global
//let escopo bloco e reatribuível
//const escopo bloco e não reatribuível


//convenção de nomenclatura
//normalmente as variáveis começam com letras, underline ou dolar sign
//não pode começar com numero

//underline significa que a variavel é restrita ao escopo, não deve sair do escopo

//classe ou função construtura começam com letra maiúscula
//uma constante pode ser toda em letra maiúscula
//palavra composta é declarada em camelCase

