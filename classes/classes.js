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
//# sourceMappingURL=classes.js.map