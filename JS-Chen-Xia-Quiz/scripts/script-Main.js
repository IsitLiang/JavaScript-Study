window.addEventListener('DOMContentLoaded', load);
let index = 4;
function load(){
    setTimeout(change,21000);

}
function change() {
    index++;
    if(index > 4 ){index=1}
    document.getElementById("gif").src="Img/gif/"+index+".gif";
    if(index===1){
        setTimeout(change,4800)
    }
    else if (index===2)
    { setTimeout(change,4390)}
    else if(index===3){
        setTimeout(change,20000);
    }
    else if (index===4){
        setTimeout(change,21000);
    }
    
}
