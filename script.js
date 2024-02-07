function BinarioParaTexto(ListaBinarios) {
    return ListaBinarios.map(bloco => String.fromCharCode(parseInt(bloco, 2))).join("");
}

function ChaveDeDecodificacao(mensagem){
    const arrayLetrasBinarias = mensagem.split(" ");
    let arrayLetrasBinariasDecodificado = [];

    for (let i = 0; i < arrayLetrasBinarias.length; i++) {
        const itemDoArray = arrayLetrasBinarias[i];
        
        const parte1 = itemDoArray.slice(0, itemDoArray.length / 2);
        const parte2 = itemDoArray.slice(itemDoArray.length / 2, itemDoArray.length);
        
        const arrayParte2 = parte2.split("");
    
        arrayParte2[parte2.length - 2] = arrayParte2[parte2.length - 2] == "1"? "0": "1";
        arrayParte2[parte2.length - 1] = arrayParte2[parte2.length - 1] == "1"? "0": "1";

        const BinarioParte2ComOsUltimosInvertidos = arrayParte2.join("");
    
        const novoItemTrocandoPartesDeLugar =  BinarioParte2ComOsUltimosInvertidos +  parte1;
    
        arrayLetrasBinariasDecodificado.push(novoItemTrocandoPartesDeLugar);
    }
    return arrayLetrasBinariasDecodificado;
}

function ExibeNaTela(){

    const elementCriptograda = document.createElement("p");
    const elementDescriptografada = document.createElement("p");
    const elementMensagem = document.createElement("p");
    const elementAviso = document.createElement("p");

    elementCriptograda.innerHTML = "Mensagem Criptografada: " +  mensagemCriptografada;
    elementDescriptografada.innerHTML = "Mensagem Descriptograda: " +  arrayBinarioDecodificado.join(" ");
    elementMensagem.innerHTML = "Mensagem: " + texto;
    elementAviso.innerHTML = "Resultado Disponível Também no console!!"
    elementAviso.style = "font-weight: bold; font-size: 1.5em;"
    const container = document.getElementById("container");

    container.appendChild(elementCriptograda);
    container.appendChild(elementDescriptografada);
    container.appendChild(elementMensagem);
    container.appendChild(elementAviso);
}


const mensagemCriptografada = "10010110 11110111 01010110 00000001 00010111 00100110 01010111 00000001 00010111 01110110 01010111 00110110 11110111 11010111 01010111 00000011";

const arrayBinarioDecodificado = ChaveDeDecodificacao(mensagemCriptografada)
const texto = BinarioParaTexto(arrayBinarioDecodificado);
console.log("Mensagem Criptografada: " + mensagemCriptografada);
console.log("Mensagem Descriptograda: " + arrayBinarioDecodificado);
console.log("Mensagem: " + texto);

ExibeNaTela();


