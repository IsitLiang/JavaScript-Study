window.addEventListener('DOMContentLoaded', load);
import data from "../data/Domande.json" assert { type: "json" };
const word = data;
let arr = document.querySelectorAll("button")
function load(){
    arr.forEach(el=>{
        el.addEventListener("click",scelta)
    })
}
function scelta(e){
    let str = e.target.innerText;
    crea(str)
}
function crea(str) {
    let box = document.getElementById("box")
    box.innerHTML="";
   for (let i = 0; i < word.length; i++) {
        if (word[i].Argomento===str){
            let x=word[i]
            box.innerHTML+='<div class="box"><div class="text"><h3>'+x.Testo+'</h3></div><img src="'+x.Immagine+'" alt=""><h3  class="risposte ">'+x.Risposta+'</h3></div>'
        }
       
   } 
}