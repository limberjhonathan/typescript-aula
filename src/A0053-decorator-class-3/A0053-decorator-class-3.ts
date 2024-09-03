function inverteNomeECor(param1: string, param2:string) {
    return function <T extends new(...args: any[]) => any>(target: T): T {
        console.log('Sou o decorador e recebi', target)
        return class extends target {
            cor: string;
            nome: string;
    
            constructor(...args: any[]) {
                super(...args);
                this.nome = this.inverter(args[0]);
                this.cor = this.inverter(args[1]);
            }
    
            inverter(valor: string): string {
                return valor.split('').reverse().join('') + ' ' + param1 + ' ' + ' ' + param2;
            }
        }
    }
}


@inverteNomeECor('valor1', 'valor2')
export class Animal {
    constructor(public nome: string, public cor: string) {}
}

const animal = new Animal('Luiz', 'Roxo')
console.log(animal)