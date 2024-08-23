interface Pessoa {
    nome: string;
}

interface Pessoa {
    readonly sobrenome: string;
}

interface Pessoa {
    readonly enderecos: readonly string[]
}

interface Pessoa {
    idade?: number;
}

const pessoa: Pessoa = {
    nome: "Luiz",
    sobrenome: "Miranda",
    enderecos: ["Av. Brasil"],
    idade: 30,
}

pessoa.idade = 31
console.log(pessoa)