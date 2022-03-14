window.addEventListener('DOMContentLoaded', load);
import data from "../data/Domande.json" assert { type: "json" };
const word = data;
//console.log(word)
let listofquestion = []
let lista_risposte= new Array(30);;
function load(){
    insetQuestion()
    let arr = document.querySelectorAll(".verifica")
    arr.forEach(element => {
        element.addEventListener("click",rispondi)
    });
    document.getElementById("check").addEventListener("click",coreggi)
}
function rispondi(e){
    let i = e.target.id
    document.getElementById(i).style.opacity="70%"
    i= i.split(/"/gm)[0];
    document.getElementById(i).removeEventListener("click",rispondi)
    document.getElementById(i+'"').removeEventListener("click",rispondi)
    if (e.target.value === "V"){
        lista_risposte[listofquestion.indexOf(word[i])] = true
        console.log("a")
    }else if(e.target.value ==="F"){
        lista_risposte[listofquestion.indexOf(word[i])] = false
        console.log("aa")
    }
}
function coreggi(){
    for (let i = 0; i < listofquestion.length; i++) {
        if (listofquestion[i].Risposta===lista_risposte[i]) {
            if(listofquestion[i].Risposta){
                document.getElementById("Div"+i).firstChild.style.backgroundColor="green";
            }
            else{
                document.getElementById("Div"+i).lastChild.style.backgroundColor="green";
            }
            
            
        }
        else{
            if(listofquestion[i].Risposta){
                document.getElementById("Div"+i).firstChild.style.backgroundColor="red";
            }
            else{
                document.getElementById("Div"+i).lastChild.style.backgroundColor="red";
            }
            
        }
       
    }
}
function insetQuestion(){
    let box = document.getElementById("big-box")
    let arrscelti=[]
    let n ; 
    let testo;
    let img;
    for (let i = 0; i < 30; i++) {
        
        n=parseInt(Math.random()*word.length)
        while(arrscelti.includes(n)){
            n=parseInt(Math.random()*word.length)
        }
        arrscelti.push(n);
        testo=word[n].Testo;
        img=word[n].Immagine;
        listofquestion.push(word[n])
        console.log(testo)
        console.log(img)
        box.innerHTML+='<div class="box"><div class="text"><h3>'+testo+'</h3></div><img src="'+img+'" alt="aaaaa"><div class="risposte "id="'+'Div'+i+'"><button id='+n+' class="verifica" value="V" >V</button><button  id='+n+'" class="verifica" value="F">F</button></div></div>';
        
    }
    box.innerHTML+="<button id='check'> Correggi </button>"
}

