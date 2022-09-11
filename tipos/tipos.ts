// String
let nome: string = 'João'
console.log(nome)
// nome = 28 - Gera um erro pois não há possibilidade de mudanças no tipo

// Numbers
let idade: number = 27
// idade = 'Ana'
idade = 27.5 // Não há diferenças no tipos Numbers
console.log(idade)

// Boolean
let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies)

// Tipos explícitos
let minhaIdade // Quando declara uma variável sem valor é gerado uma variável do tipo dinâmico
minhaIdade = 27
console.log(typeof minhaIdade)
minhaIdade = 'Idade é 27'

// Array
let hobbies: any[] = ['Cozinhar', 'Praticar Esportes'] // Gera um array que pode receber qualquer tipo de valor
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
// hobbies = 100
console.log(hobbies)

// Tuplas - É um array com tipos pré-definidos
let endereco: [string, number, string] = ['Av Principal', 99, '']
console.log(endereco)

endereco = ['Rua Importante', 1260, 'Bloco C']
console.log(endereco)

// Enums - São estruturas que definem valores pré-definidos
enum Cor {
  Cinza, // 0
  Verde = 100, // Definindo um valor fixo
  Azul = 10, // 10
  Laranja, // 11
  Amarelo, // 12
  Vermelho = 100 // Também é possível duplicar a numeração, caso faça sentido no uso
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)

// Any (Tipagem Dinâmica)
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019 }
console.log(carro)

// Funções
function retornaMeuNome(): string {
  // return minhaIdade
  return nome
}

console.log(retornaMeuNome())

function digaOi(): void {
  console.log('Oi')
  // return minhaIdade
}

digaOi()

function multiplicar(numA: number, numB: number): number {
  return numA * numB
}

// console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(4.7, 9))

// Tipo Função
let calculo: (numeroA: number, numeroB: number) => number
// calculo = digaOi
// calculo()
// calculo = {}

calculo = multiplicar
console.log(calculo(5, 6))

// Objetos
let usuario: { nome: string; idade: number } = {
  nome: 'João',
  idade: 27
}
console.log(usuario)

// usuario = {}

// usuario = {
//   name: 'Maria',
//   age: 31
// }

usuario = {
  idade: 31, // Não há problemas em declarar os valores em ordem diferente
  nome: 'Maria' // É preciso somente respeita-los
}
console.log(usuario)

// Desafio
/*
  Criar um objeto funcionario com:
    - Array de strings com os nomes dos supervisores
    - Função de bater ponto que recebe a hora(número) e retorna uma string
      -> Ponto normal (<= 8)
      -> Fora do horário (>8)
*/

// Alias
type Funcionario = {
  // Define um tipo específico para reutilizar
  supervisores: string[]
  baterPonto: (horas: number) => string
}

let funcionario: Funcionario = {
  supervisores: ['Ana', 'Fernando'],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return 'Ponto normal'
    } else {
      return 'Fora do horário'
    }
  }
}

let funcionario2: Funcionario = {
  supervisores: ['Bia', 'Carlos'],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return 'Ponto normal'
    } else {
      return 'Fora do horário'
    }
  }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(10))

// Unior Types
let nota: number | string = 10 // Define mais de um tipo dentro de uma variável
console.log(`Minha nota é ${nota}!`)
nota = '10'
console.log(`Minha nota é ${nota}!`)
// nota = true

// Checando Tipos
let valor = 30

if (typeof valor === 'number') {
  console.log('É um valor number!')
} else {
  console.log(typeof valor)
}

// Never
function falha(msg: string): never {
  throw new Error(msg)
}

const produto = {
  nome:'Sabão',
  preco: 4,
  validarProduto() {
    if(!this.nome || this.nome.trim().length == 0) {
      falha('Precisa ter um nome!')
    }
    if(this.preco <= 0) {
      falha('Preço inválido!')
    }
  }
}

produto.validarProduto()

// Null
let altura = 12
// altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
  nome: string,
  tel1: string,
  tel2: string | null
}

const contato1: Contato = {
  nome: 'Fulano',
  tel1: '987654325',
  tel2: null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

let podeSerNulo: null = null // Não faz muito sentido atribuir o valor Null a variáveis, atribua o Any
// podeSerNulo = 12
console.log(podeSerNulo)
// podeSerNulo = 'abc'
console.log(podeSerNulo)

// Desafio
type ContaBancaria = {
  saldo: number,
  depositar: (valor: number) => void
}

let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor: number) {
    this.saldo += valor
  }
}

type Correntista = {
  nome: string,
  contaBancaria: ContaBancaria,
  contatos: string[]
}

let correntista: Correntista = {
  nome: 'Ana',
  contaBancaria: contaBancaria,
  contatos: ['34567890', '991989765']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)