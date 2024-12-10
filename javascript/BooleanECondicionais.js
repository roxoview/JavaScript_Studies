//Conceito de boolean e condicionais.
// == se o valor é igual, não compara tipo de dado - conversão implicita
// === compara o valor e o tipo do dado
// conversão implicita é quando o interpretador ou compilador transforma automaticamente os tipos de dados, ou seja, não importa o tipo de dado, haverá conversão.
//exemplo de conversão implicita
// const conversaoImplicita = 2 == '2'
// console.log(conversaoImplicita)
// const NaoConversaoImplicita = 2 === '2'
// console.log(NaoConversaoImplicita)

const numero = 5;
const isNumeroPar = (numero % 2) === 0; //quando a variável é booleana, é boas práticas nomea-la com "is"

// console.log(numeroPar)


//condicional
if(numero === 0){
  console.log(`O número ${numero} não é divisivel`)
}else if(isNumeroPar){
  console.log(`O número ${numero} é par`)
}else{
  console.log(`O número ${numero} é impar`)
}
