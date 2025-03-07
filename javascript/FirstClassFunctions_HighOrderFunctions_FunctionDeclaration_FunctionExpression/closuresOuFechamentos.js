//Closures ou fechamentos.
//quando declaramos uma função ela se lembra do contexto onde foi declarada.
//exemplo

function soma(x){
  return function(y){
    return x + y;
  }
}

console.log(soma(10)(20))

const somaParcial = soma(10)
console.log(somaParcial(20))
console.log(somaParcial(30))
console.log(somaParcial(40))

//a caracteristica da closures, é armazenar o valor da primeira função, ela lembra do contexto que foi criada.
//no exemplo acima, soma guarda o valor 10, e para a função que retorna a soma lembra do contexto e realiza a operção.
//a cada somaParcial invocada, eu adiciono o valor do contexto inicial da soma que é 10.
//então a cada interação eu adiciono 10 ao valor já somado.
//20 + 10
//30 + 10
//40 + 10

//se usarmos arrow function na função de retorno, tábem funciona, pois a função guarda o contexto, não temos o this, mas ela
//consegue guardar o contexto no momento me que foi criada.
function ConcatName(nome){
  return (sobrenome) =>{
    return `${nome} ${sobrenome}`
  }
}
const nomeCompleto = ConcatName('Romário')
console.log(nomeCompleto('Oliveira'))
console.log(nomeCompleto('Guedes'))
console.log(nomeCompleto('Silva'))

//função multiplicar 
function multiplica (n){
  return function (y){
    const total = n * y
    return total
  }
}

const multiplicador = multiplica(2)
console.log(multiplicador(4))
console.log(multiplicador(5))