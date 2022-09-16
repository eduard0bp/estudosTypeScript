"use strict";
class Data {
    // São tipos públicos por padrão
    dia;
    mes; // É possível colocar a palavra public
    ano;
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);
const casamento = new Data();
casamento.ano = 2017;
console.log(casamento);
class DataEsperta {
    dia;
    mes;
    ano;
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);
const casamentoEsperto = new DataEsperta(); // É possível omitir os "()"
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);
// Desafio Produto
// Atributos: nome, preço e desconto
// Criar o construtor
// Obs 1.: Desconto é opcional (valor padrão 0)
// Obs 2.: Criar dois produtos: passando dois e três parâmetros
class Produto {
    nome;
    preco;
    desconto;
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    // Criar método precoComDesconto
    // Quais são os parâmetros e o retorno?
    // Alterar método resumo para mostrar o preço com desconto
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
    resumo() {
        return `${this.nome} custa R$${this.preco}, desconto de ${this.desconto}% OFF, e o preço com desconto é ${this.precoComDesconto()}`;
    }
}
const caneta = new Produto('Caneta', 2.5);
caneta.desconto = 0.5;
console.log(caneta.resumo());
const carregador = new Produto('Carregador', 45.99);
console.log(carregador.resumo());
// Public & Private
class Carro {
    marca;
    modelo;
    velocidadeMaxima;
    velocidadeAtual = 0; // Visível na própria classe e não transmitido por herança
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Ford', 'Ka', 185);
Array(50).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar());
Array(40).fill(0).forEach(() => carro1.frear());
console.log(carro1.frear());
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
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('F40', 324);
console.log(`${f40.marca}, ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.acelerar());
console.log(f40.frear());
console.log(f40.frear());
// Getter & Setters
class Pessoa {
    _idade = 0; // É utilizado o "_" como convenção para definir um atributo privado
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1.idade);
pessoa1.idade = -3;
console.log(pessoa1.idade);
// Atributos e Métodos Estáticos
class Matematica {
    static PI = 3.1416;
    static areaCirc(raio) {
        return Matematica.PI * raio * raio;
    }
}
// const m1 = new Matematica() // Com Static não é necessário criar uma Instancia da Classe
// m1.PI = 4.2
// console.log(m1.areaCirc(4))
// console.log(new Matematica().areaCirc(4)) // Sem Static
console.log(Matematica.areaCirc(4)); // Com Static
// Classe Abstrata
// Classes Abstratas perdem a habilidade de serem instanciadas, servem para serem Classes Pai para outras Classes
class Calculo {
    resultado = 0;
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((total, atual) => total + atual);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((total, atual) => total * atual);
    }
}
let c1 = new Soma(); // Exemplo de Polimorfismo
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
c1 = new Multiplicacao();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
// Construtor privado & Singleton
class Unico {
    static instance = new Unico;
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
// const errado = new Unico() // Exemplo Errado
console.log(Unico.getInstance().agora());
// Atributos Somente Leitura
class Aviao {
    prefixo;
    modelo;
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('Tu-114', 'PT-ABC');
// turboHelice.modelo = 'DC-8'
// turboHelice.prefixo = 'PT-DEF'
console.log(turboHelice);
//# sourceMappingURL=classes.js.map