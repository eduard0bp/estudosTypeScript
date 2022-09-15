class Data {
  // São tipos públicos por padrão
  dia: number
  public mes: number // É possível colocar a palavra public
  ano: number

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia
    this.mes = mes
    this.ano = ano
  }
}

const aniversario = new Data(3, 11, 1991)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data()
casamento.ano = 2017
console.log(casamento)

class DataEsperta {
  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 1970
  ) {}
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991)
aniversarioEsperto.dia = 4
console.log(aniversarioEsperto.dia)
console.log(aniversarioEsperto)

const casamentoEsperto = new DataEsperta() // É possível omitir os "()"
casamentoEsperto.ano = 2017
console.log(casamentoEsperto)

// Desafio Produto
// Atributos: nome, preço e desconto
// Criar o construtor
// Obs 1.: Desconto é opcional (valor padrão 0)
// Obs 2.: Criar dois produtos: passando dois e três parâmetros

class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0
  ) {}

  // Criar método precoComDesconto
  // Quais são os parâmetros e o retorno?
  // Alterar método resumo para mostrar o preço com desconto

  precoComDesconto(): number {
    return this.preco * (1 - this.desconto)
  }

  public resumo(): string {
    return `${this.nome} custa R$${this.preco}, desconto de ${
      this.desconto
    }% OFF, e o preço com desconto é ${this.precoComDesconto()}`
  }
}

const caneta = new Produto('Caneta', 2.5)
caneta.desconto = 0.5
console.log(caneta.resumo())

const carregador = new Produto('Carregador', 45.99)
console.log(carregador.resumo())

// Public & Private

class Carro {
  private velocidadeAtual: number = 0 // Visível na própria classe e não transmitido por herança

  constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200) {

  }

  protected alterarVelocidade(delta: number): number { // Visível na própria classe e transmitido por herança
    const novaVelocidade = this.velocidadeAtual + delta
    const velocidadeValida  = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima

    if(velocidadeValida) {
      this.velocidadeAtual = novaVelocidade
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
    }

    return this.velocidadeAtual
  }

  public acelerar(): number { // Visível fora da classe e transmitido por herança
    return this.alterarVelocidade(5)
  }

  public frear(): number {
    return this.alterarVelocidade(-5)
  }
}

const carro1 = new Carro('Ford', 'Ka', 185)
Array(50).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar())

Array(40).fill(0).forEach(() => carro1.frear())
console.log(carro1.frear())

// Simulando "Erros"

// carro1.velocidadeAtual = 300 // É permitido o acesso porque o Javascript não possúi classes Privadas
// console.log(`Atual -> ${carro1.velocidadeAtual}`)

// carro1.velocidadeMaxima = 500
// console.log(`Máxima -> ${carro1.velocidadeMaxima}`)

// carro1.alterarVelocidade(150)
// console.log(`Atual -> ${carro1.velocidadeAtual}`)

// Heranças
// Public, Protect e Private

class Ferrari extends Carro {
  constructor(modelo: string, velocidadeMaxima: number) {
    super('Ferrari', modelo, velocidadeMaxima)
  }

  public acelerar(): number {
    return this.alterarVelocidade(20)
  }

  public frear(): number {
    return this.alterarVelocidade(-15)
  }
}

const f40 = new Ferrari('F40', 324)
console.log(`${f40.marca}, ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.acelerar())
console.log(f40.frear())
console.log(f40.frear())

// Getter & Setters

class Pessoa {
  private _idade: number = 0 // É utilizado o "_" como convenção para definir um atributo privado

  get idade(): number {
    return this._idade
  }

  set idade(valor: number) {
    if(valor >= 0 && valor <= 120) {
      this._idade = valor
    }
  }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log(pessoa1.idade)

pessoa1.idade = -3
console.log(pessoa1.idade)