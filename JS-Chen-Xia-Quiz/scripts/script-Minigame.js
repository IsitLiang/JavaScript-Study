
window.addEventListener('DOMContentLoaded', load);
import data from "../data/Domande.json" assert { type: "json" };
const word = data;

let rdmarr = [];
let index = 0;
function load(){
    rdmarr=word.sort((a, b) => 0.5 - Math.random());//shuffle array
    createbox()
    
}
function createbox(){
    let box = document.getElementById("big-box")
    box.innerHTML="";
    let testo = rdmarr[index].Testo;
    let img = rdmarr[index].Immagine;
    box.innerHTML+='<div class="box"><div class="text"><h3>'+testo+'</h3></div><img src="'+img+'" alt="aaaaa"><div class="risposte "><button class="verifica" id="true" value="V">Vero</button><button id="false" class="verifica" value="F">Falso</button></div></div>';
    if (rdmarr[index].Risposta) {
        document.getElementById("true").addEventListener("click",giusto);
        document.getElementById("false").addEventListener("click",lose)
    }
    else{
        document.getElementById("true").addEventListener("click",lose);
        document.getElementById("false").addEventListener("click",giusto);
    }
    
}
function lose(){
    document.getElementById("big-box").innerHTML=""
    document.getElementById("losebox").innerHTML="<h3>Hai Perso,Hai Fatto "+index+" Domande Giuste</h3>"
    document.getElementById("losebox").innerHTML+="<button id='restart'>Ritenta La Prova</button>"
    document.getElementById("restart").addEventListener("click",restart);
}

function restart(){
    index = 0;
    document.getElementById("big-box").innerHTML="";
    document.getElementById("losebox").innerHTML="";
    load();
}
function giusto() {
    if(index<word.length){
        index++;
        createbox()
    }else{
        document.getElementById("big-box").innerHTML="<h3>Hai Vinto Congratulazioni hai superato il 99% della popolazione mondiale </h3>"
    };
}