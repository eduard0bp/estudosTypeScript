namespace Geometria {
  export namespace Area { // Aninhamento de Namespaces
    const PI = 3.14

    export function circunferencia(raio: number) {
      return PI * Math.pow(raio, 2)
    }
  }
}