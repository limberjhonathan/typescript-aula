export class CarrinhoDeCompras {
    private readonly produtos: Produto[] = []
}

export class Produto {
    constructor(private _nome: string, public preco: number) {}

    get nome(): string {
        return this._nome
    }
}

const produto1 = new Produto('Camiseta', 49.9)