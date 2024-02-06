const mensagemCriptografada = "10010110 11110111 01010110 00000001 00010111 00100110 01010111 00000001 00010111 01110110 01010111 00110110 11110111 11010111 01010111 00000011";
const arrayLetrasBinarias = mensagemCriptografada.split(" ");

let arrayLetrasBinariasEditada = [];

for (let i = 0; i < arrayLetrasBinarias.length; i++) {
    const item = arrayLetrasBinarias[i];
    const parte1 = item.slice(0, item.length / 2);
    const parte2 = item.slice(item.length / 2, item.length);

    const arrayParte2 = parte2.split("");

    const penultimo = parte2.split("")[parte2.length - 2];
    const ultimo = parte2.split("")[parte2.length - 1];

    arrayParte2[parte2.length - 2] = ultimo;
    arrayParte2[parte2.length - 1] = penultimo;

    const novoItem = arrayParte2.join("") +  parte1;

    arrayLetrasBinariasEditada.push(novoItem);
    
}

console.log("mesangem: " + arrayLetrasBinariasEditada.join(" "));