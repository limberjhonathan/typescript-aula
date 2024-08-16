export function funcao(this:Date, argumento1:string, age:number): void {
    console.log(this)
    console.log(argumento1)
}

funcao.call(new Date(), 'Luiz', 20);
funcao.apply(new Date(), ['Luiz', 20]);