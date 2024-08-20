export class Pessoa{
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected _cpf: string,
    ) {}

    set cpf(cpf: string){
        this._cpf = cpf;
    }

    get cpf(): string {
        return this._cpf.replace(/\D/g, '')
    }
}

const pessoa = new Pessoa("Luiz", "Miranda", 30, '000.000.000-00')
pessoa.cpf = '123.456.789-99'
console.log(pessoa.cpf)