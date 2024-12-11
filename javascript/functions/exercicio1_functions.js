//praticando funções
//faça uma função que exiba seu nome.
function escrevaMeuNome (nome){
 return `Meu nome é ${nome}`;
}
escrevaMeuNome('Romário');

//faça uma função que verifique se você é maior de idade.

function ehMaiorDeIdade(idade){
  if(idade <= 18){
    console.log(escrevaMeuNome('Romário') + ' ' + 'Menor de idade');
  }else{
    console.log(escrevaMeuNome('Romário') + ' ' + 'Maior de idade')
  }
}
ehMaiorDeIdade(11);

