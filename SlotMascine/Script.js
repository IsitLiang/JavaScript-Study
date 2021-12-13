window.addEventListener('DOMContentLoaded', load);
    
    let disct= {
        1 : "01.jpg",
        2 : "02.jpg",
        3 : "03.jpg",
        4 : "04.jpg",
        5 : "05.jpg",
        6 : "06.jpg",
        7 : "07.jpg"
    }
    let ind = 0
    let arr = [1,1,1,2,2,2,3,3,3]
    let clicks = 0;
    let farr = []
    let n =0
function load(){
    document.getElementById("btn").addEventListener("click",start)
    
}

function start(){

    let point = document.createElement("h1")
    document.getElementById("form").className="none";
    point.innerText="00";
    point.id="point";
    document.getElementById("head").appendChild(point)

    let tent=document.createElement("h1")
    tent.id="nums"
    if(document.getElementById("num").value===0){
        tent.innerText=0;
    }
    else{
        tent.innerText=document.getElementById("num").value;
    }
    
    let name=document.createElement("h1");
    name.innerText="player : "+document.getElementById("user").value;
    
    document.getElementById("head").appendChild(name);

    document.getElementById("head").appendChild(tent)

    arr=shuffle(arr)
    for (let {} of arr){
        let img = document.createElement("img")
        img.addEventListener("click",click)
        img.src="img/cardback.jpg";
        img.id=ind;
        img.setAttribute("width",100) 
        ind++
        document.getElementById("game_table").appendChild(img)
        
        
        
        
        
        }
    console.log(arr)
    let btn = document.createElement("button")
    btn.className="see"
    btn.id="btn"
    btn.textContent="Restart"
    btn.addEventListener("click",restart) 
    document.getElementById("head").appendChild(btn)
    

}
function click(ev){
    if (clicks<3){
        ev.target.src="img/"+disct[arr[ev.target.id]]
        ev.target.removeEventListener("click",click)
        clicks++;
        farr.push(arr[ev.target.id]);
        if (clicks===3){
            document.getElementById("btn").className="see"
            console.log(farr)
            check();
            add();
            

        }
    }
    
}
function restart(){
    console.log(farr)
    document.getElementById("nums").innerText--;
    ind = 0
    arr = [1,1,1,2,2,2,3,3,3]
    clicks = 0;
    farr = []
    console.log(farr)
    arr = shuffle(arr)
    for (let i = 0; i < arr.length; i++) {
        document.getElementById(i).src="img/cardback.jpg";
        document.getElementById(i).addEventListener("click",click)
        
    }
    checkfine()
    document.getElementById("btn").className="none"

}
function add(){
    let div = document.createElement("div")
    div.innerHTML="<h1>Storico N:"+n+"</h1>"
    n++;
    for (let i = 0; i < farr.length; i++) {
        let img = document.createElement("img")
        img.src="img/"+disct[farr[i]]
        img.style.width="100px"
        div.appendChild(img);
        
    }
    
    document.getElementById("storic").appendChild(div);
}
function check(){
    console.log("a")
    if(farr.reduce((a,b)=>a+b)<4)
    {
        console.log("100")
        document.getElementById("point").innerText=parseInt(document.getElementById("point").innerText)+100;
    }
    else if (farr.reduce((a,b)=>a+b)>6){
        console.log("30")
        document.getElementById("point").innerText=parseInt(document.getElementById("point").innerText)+30;
    }
    else{
        console.log("20")
        document.getElementById("point").innerText=parseInt(document.getElementById("point").innerText)+70;
    }
}
function checkfine(){
    if (document.getElementById("nums").innerText==="0"){
        location.reload();
    }
}
function shuffle(arr){
    for (let i = 0 ; i< arr.length;i++){
        let j =  parseInt(Math.random()*(arr.length-i)+i)
        let c = arr[i]
        arr[i]=arr[j]
        arr[j]=c
    }
    return arr
}