//exercicios estruturas de repetição
//crie um programa que dado número imprima sua tabuada
const numeroMultiplicando = 7;
for(let i = 0; i <= 10; i++){
  console.log(`${numeroMultiplicando} x ${i}: ` + (numeroMultiplicando * i))
}

//exercicio apenas números pares
//crie um programa que seja capaz de percorrer uma lista de números e imprima
//cada numero par encontrado
const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
for(let i = 0; i < numeros.length; i++){

  const numeroPar = numeros[i] % 2 === 0 ? `${numeros[i]} é par`: `${numeros[i]} é impar`
  console.log(numeroPar)
 
}

const familia = ['Romário Oliveira', 'Victor Oliveira', 'Antonio santos', 'Xavier Santos']
for(let i = 0; i < familia.length; i++){
  
  if(familia[i].toLowerCase().includes('oliveira')){
    console.log(`${familia[i]} é da familia oliveira`)
  }else if(familia[i].toLowerCase().includes('santos')){
   console.log(`${familia[i]} é da familia santos`) 
  }
}

const string = 'romário malves'
let armazenandoString = ''
for(let i = 0; i < string.length; i++){
  console.log(string[i])
  
  armazenandoString+=string[i]
  console.log(armazenandoString)

}
const numerosPares = []; 
for (let i = 0; i < 10; i = i + 2) { 
  numerosPares.push(i); 
} 
console.log(numerosPares)