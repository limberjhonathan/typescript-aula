type MeuTipo = number | 10;

const arrayNumeros: Array<number> = [1,2,3,4,5,6,7,8,9];
console.log(arrayNumeros);

async function promiseAsync() {
    return 1;
}

function minhaPromise(): Promise<MeuTipo> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    });
}

promiseAsync().then((resultado) => console.log(resultado + 1))
minhaPromise().then((resultado) => console.log(resultado + 1))