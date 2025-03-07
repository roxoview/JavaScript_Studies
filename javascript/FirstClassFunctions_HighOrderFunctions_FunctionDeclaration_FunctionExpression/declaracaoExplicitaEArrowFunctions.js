//Declaração explicita e Arrow Function

//Javascript moderno, depoisdo ECS6

//forma literal
function funcao1(){
  console.log(this)
}
//function expression com arrow function
const funcao2 = ()=>{
  console.log(this)
}

//arrow functions não possuem contexto 'this'
//a function literal cria um contexto para isolar todo o código, sendo possível usar o this
// na arrow function isso não acontece.

const obj = {
  nome: 'Objeto',
  funcao1,
  funcao2
}

obj.funcao1()
obj.funcao2()

//quando uma função está dentro de um objeto, ela assume o contexto do objeto e o this passa a ser o objeto.
//se for preciso usar contexto, function explicita é a melhor opção.

