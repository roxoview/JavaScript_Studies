//o que é um array
//listas são representadas por colchetes []
//possuem uma posição iniciando do 0
//a lista pode iniciar vazia.
//poemos ter tipos de dados diferentes na lista em javascript.
const alunos = ['João', 'Vitor', 'Marina'];
//podemos acessar o valor utilizando a posição de cada item na lista.
console.log(alunos[0])
//temos varias opções de métodos para manipular essas listas.


// temos o método push que adiciona items a lista.
//push adiciona um item na última posição da lista.
alunos.push('Juquinha')
console.log(alunos)
//podemos adicionar um item em determinada posição também. a posição precisa existir, caso a posição exista e já tenha um item
//esse item será substituído.
//caso a posição não exista, será criada posicões vazias até a posição escolhida.
alunos[6] = 'Camila'


//método pop() remove item no final da lista
console.log(alunos.pop())

//metodo shift() remove o primeiro item da lista
console.log(alunos.shift())

//podemos utilizar a propriedade length para saber o tamanho de uma lista - retorna o número de elementos

console.log(alunos.length)
