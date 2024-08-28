type Documento = {
    titulo: string;
    texto: string;
    data?: Date;
}

const documento: Documento = {
    titulo: "O titulo",
    texto: "O texto",
    //data: new Date(),
}

console.log(documento.data?.toDateString() ?? "Ixi, não existe data.")
console.log(undefined ?? "Ixi, não existe data.");
console.log(null ?? "Ixi, não existe data.");
console.log(false ?? "Ixi, não existe data.");
console.log(0 ?? "Ixi, não existe data.");
console.log('' ?? "Ixi, não existe data.");  