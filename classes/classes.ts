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
