"use strict";
// "noEmitOnError"
let canal = 'Gaveta';
let inscritos = 610234;
// canal = inscritos
console.log(`Canal = ${canal}`);
// let nome = "Pedro" - Não é possível declarar a variável novamente, mesmo que ela esteja em outro arquivo
// -----//-----
// "sourceMap"
function soma(a, b) {
    return a + b;
}
// -----//-----
// "noImplicitAny"
// Sempre que puder, coloque tipos mais explícitos, para ficar um código mais legível
let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'ABC';
// -----//-----
// "strictNullChecks" / "noUnusedLocals" / "noUnusedParameters"
function saudar(isManha) {
    let saudacao;
    if (isManha) {
        saudacao = 'Bom dia!';
    }
    else {
        saudacao = 'Tenha uma boa vida!';
    }
    return saudacao;
}
// -----//-----
//# sourceMappingURL=compilador.js.map