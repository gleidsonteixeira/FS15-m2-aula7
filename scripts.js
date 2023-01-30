// let listaDeCompras = ["ovos","leite","manteiga"];

// let listaDeCompras = [];
// listaDeCompras[0] = "ovos";
// listaDeCompras[1] = "leite";
// listaDeCompras[200] = "farinha";

// let listaDeCompras = [];
// listaDeCompras.push("açucar");
// listaDeCompras.push("feijão");
// listaDeCompras.push("arroz");

let tentativas = 0;
let numeroRandomico = Math.floor(Math.random() * 100) + 1;

function checarTentativa(){
    tentativas = tentativas + 1;

    if(tentativas == 5){
        alert("Game over");
        perdeu();
        return;
    }

    alert(tentativas);
}

function perdeu(){
    window.location = "/perdeu.html";
}