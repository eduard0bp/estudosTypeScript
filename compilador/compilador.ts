// "noEmitOnError"
let canal: string = 'Gaveta'
let inscritos: number = 610234

// canal = inscritos
console.log(`Canal = ${canal}`)

// let nome = "Pedro" - Não é possível declarar a variável novamente, mesmo que ela esteja em outro arquivo

// -----//-----
// "sourceMap"
function soma(a: any, b: any) {
  return a + b
}

// -----//-----
// "noImplicitAny"
// Sempre que puder, coloque tipos mais explícitos, para ficar um código mais legível
let qualquerCoisa
qualquerCoisa = 12
qualquerCoisa = 'ABC'

// -----//-----
// "strictNullChecks" / "noUnusedLocals" / "noUnusedParameters"
function saudar(isManha: boolean): string {
  let saudacao: string
  if (isManha) {
    saudacao = 'Bom dia!'
  } else {
    saudacao = 'Tenha uma boa vida!'
  }
  return saudacao
}

// -----//-----
