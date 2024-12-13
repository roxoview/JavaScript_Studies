//entendendo sobre classes e instâncias
//como criar classes e instâncias.
// a responsabilidade da classe é definir o objeto para que ele possa ser instânciado com os atributos da classe.
//classe é a definição do que deve ser o objeto, e instância é a ocorrência daquele objeto.
class Pessoa{
  nome;
  idade;
  anoDeNascimento;
  constructor(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2024 - idade;
  }
  descrever(){
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}
//instanciando uma pessoa
const romario = new Pessoa('Romário', 30);

//instânciando uma nova pessoa
const victor = new Pessoa('Victor', 15);

console.log(romario)
console.log(victor)

// romario.descrever();
// victor.descrever();

//criando instâncias com constructor
//na teoria tudo que for necessário para criar um objeto, usariamos o construtor.
//os valores dentro de uma classe são chamados de atributos.

//o constructor é o que acontecendo quando uma classe é instanciada.
//O constructor em uma classe JavaScript é um método especial usado para criar e inicializar objetos
//criados a partir de uma classe. Ele é executado automaticamente quando uma nova instância da classe
//é criada usando a palavra-chave
// //-----------------------------------------
// Principais finalidades do constructor:
// Inicializar propriedades: Ele define as propriedades iniciais do objeto.
// Configurar dependências: Permite passar valores ou configurações específicas para cada instância no momento de sua criação.
// Preparar o objeto para uso: Configura qualquer lógica ou estado necessário para o objeto funcionar adequadamente.
class Carro{
  modelo;
  ano;
  cor;
  tipoCombustivel;
  tipoCambio;
  qtdPortas;
  constructor(modelo,ano,cor,tipoCombustivel,tipoCambio,qtdPortas){
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.tipoCombustivel = tipoCombustivel;
    this.tipoCambio = tipoCambio;
    this.qtdPortas = qtdPortas;
  }
  exibirCarro(){
    console.log(`Descrição carro: Modelo: ${this.modelo} - Ano: ${this.ano} - Cor: ${this.cor} - Tipo Combustível: ${this.tipoCombustivel} - Cambio: ${this.tipoCambio} - Portas: ${this.qtdPortas}`)
  }
}

const carro1 = new Carro('Fiat Uno', 1995, 'Preto', 'Gasolina', 'Manual', 4);
const carro2 = new Carro('Mercedes G63 AMG', 2024, 'Preto', 'Gasolina', 'Automático', 4 );



// console.log(carro1)
// carro1.exibirCarro('Fiat Uno', 1995, 'Preto', 'Gasolina', 'Manual', 4)
console.log(carro2)

// Características do constructor:
// Ele é opcional: Se você não definir um, a classe terá um constructor padrão que não faz nada.
// Deve ter o nome constructor: Não pode ser renomeado.
// Em classes derivadas (ou seja, que usam extends), o constructor precisa chamar o super() antes de acessar o this. O super() invoca o constructor da classe base.
// Exemplo com herança:

// class Animal {
//   constructor(nome) {
//     this.nome = nome;
//   }

//   fazerSom() {
//     console.log('Som genérico de animal');
//   }
// }

// class Cachorro extends Animal {
//   constructor(nome, raca) {
//     super(nome); // Chama o constructor da classe base (Animal)
//     this.raca = raca; // Propriedade específica de Cachorro
//   }

//   fazerSom() {
//     console.log('Au au!');
//   }
// }

// const dog = new Cachorro('Rex', 'Labrador');
// console.log(dog.nome); // 'Rex'
// console.log(dog.raca); // 'Labrador'
// dog.fazerSom(); // 'Au au!'

