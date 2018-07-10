//export default torna a classe pública
//não existe classe no js. Isso é uma forma de escrever uma função
export default class Pessoa { 
    constructor(nome) {
        this.nome = nome
    }
    toString() {
        return `Pessoa: ${this.nome}`
    }
}