interface Constructor {
    new (...args: any[]): any;
}

function inverteNomeECor(param1: string, param2:string) {
    return function (target: Constructor) {
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

function outroDecorador(param1: string){
    return function (target: Constructor){
        console.log('Sou o outro decorador' + param1)
        return target
    }
}

@outroDecorador('O parametro do outro decorador')
@inverteNomeECor('valor1', 'valor2')
export class Animal {
    constructor(public nome: string, public cor: string) {}
}

const animal = new Animal('Luiz', 'Roxo')
console.log(animal)