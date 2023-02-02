let tentativas = 0;
let numeroRandomico = Math.floor(Math.random() * 100) + 1;
let palpites = [];


function checarTentativa(){
    tentativas = tentativas + 1;

    if(palpites.includes(Number(palpite.value))){
        alert("Este palpite ja foi dado")
        return;
    }else{
        palpites.push(Number(palpite.value));
        let respostas = document.getElementById("respostas");
        respostas.innerText = "";
        for(let i = 0; i < palpites.length; i++){
            respostas.innerText += `${palpites[i]} - `;
        }
    }

    if(Number(palpite.value) > numeroRandomico){
        alert("O palpite foi maior do que eu estou pensado");
    }

    if(Number(palpite.value) < numeroRandomico){
        alert("O palpite foi menor do que eu estou pensado");
    }

    if(tentativas < 10){
        if(Number(palpite.value) == numeroRandomico){
            alert("Parabens, você acertou o numero: "+ palpite.value);
            document.getElementById("bia").src = "vitoria.png";
        }
    }else{
        alert("Game over");
        document.getElementById("bia").src = "derrota.png";
        return;
    }

}

function perdeu(){
    window.location = "/perdeu.html";
}