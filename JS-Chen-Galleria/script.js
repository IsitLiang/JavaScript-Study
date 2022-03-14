
window.addEventListener('DOMContentLoaded', load);
document.addEventListener('keydown', keypress) 

let img_list=[  {Immagine:"Ahri.jpg",titolo:"Ahri",data:"09/16/2020",tags:"Anime",hashcode:"2081BD229943B714D15D157392D45E45",dislike:{like:0,dislike:0}},
                {Immagine:"Bunny.jpg",titolo:"Rascal Does Not Dream of a Dreaming Girl",data:"09/16/2021",tags:"game",hashcode:"82D5F6067689D723797036AEF0DB3919",dislike:{like:0,dislike:0}},
                {Immagine:"Keqing.jpg",titolo:"KeQing",data:"09/16/2220",tags:"Photo",hashcode:"AB6ACDEED923236DBE0D7EF8FE6CB66C",dislike:{like:0,dislike:0}},
                {Immagine:"Miku.png",titolo:"Miku",data:"09/16/2010",tags:"people",hashcode:"4FB3D7104CCC3F7487A2B2B82637A1CC",dislike:{like:0,dislike:0}},
                {Immagine:"ReMu.png",titolo:"ReMu",data:"09/16/2010",tags:"people",hashcode:"7CC8D04BF948725CF0AA3D46B63516DB",dislike:{like:0,dislike:0}},
                {Immagine:"Shape.png",titolo:"Shape of Voice",data:"09/16/2010",tags:"album",hashcode:"BFED5F2E68421D4699539F5F5DF00982",dislike:{like:0,dislike:0}}
                ,{Immagine:"Dva.png",titolo:"Dva",data:"09/16/2010",tags:"game",hashcode:"101E4ABD5DB8626785C19E5F65DB746D",dislike:{like:0,dislike:0}}

            ]

let arr = [0,1,2,3,4,5,6]

function load(){
    loadimg()
    let goone = document.createElement("button");
    goone.textContent="»"
    goone.addEventListener("click",nextimg);
    let back = document.createElement("button");
    back.textContent="«"
    back.addEventListener("click",nextimg);
    document.getElementById("nav").appendChild(back);
    document.getElementById("nav").appendChild(goone);
    
}
function nextimg(){
    arr = bone(arr);
    document.getElementById("ImgBlock").innerHTML=""
    loadimg()
}
function preimg(){
    arr=gone(arr);
    document.getElementById("ImgBlock").innerHTML=""
    loadimg()
    
}

function gone(arr) {
    let array=[];
    array.push(arr[arr.length-1])
    for (let i = 0; i < arr.length-1; i++) {
        array.push(arr[i]);
    }
    console.log(array)
    return array;
    
}
function bone(arr){
    let array = [];
    for(let i = 1;i<arr.length;i++){
        array.push(arr[i])
    }
    array.push(arr[0]);
    return array
}

function loadimg() {
    
    for(let i of arr){
        let div = document.createElement("div");
        let img = document.createElement("img");
        let textcontent = document.createElement("div");
        let h1 = document.createElement("h1");
        let p = document.createElement("p");
        let p2=document.createElement("p");
        let bnt = document.createElement("button")
        let text= document.createElement("input")  
        let d=document.createElement("div");
        let btn = document.createElement("button");

        let dtn= document.createElement("button");
        let date = document.createElement("input");

        let b = document.createElement("div");

        let like = document.createElement("div");
        like.className="like"

        let ike =document.createElement("img");
        ike.src="Img/likec.png";
        ike.id=i+"like"
        let dis=document.createElement("img");
        dis.src="Img/dislikec.png";
        dis.id=i+"dis"
        ike.addEventListener("click",lik);
        dis.addEventListener("click",dislike);
        
        like.appendChild(ike);
        like.appendChild(dis);


        date.type="date";
        date.id="d"+i;
        dtn.addEventListener("click",subdate);
        dtn.textContent="Fatto"
        dtn.id="F"+i
        b.id="y"+i
        b.className="none"
        b.appendChild(date);
        b.appendChild(dtn);
        text.type="text";
        text.id="B"+i+"t";
        p.addEventListener("dblclick",changedate);
        p.id="P"+i
        btn.addEventListener("click",sub);
        btn.textContent="Fatto";
        btn.id="B"+i;
        d.className="none";
        d.id="H"+i+"d"
        d.appendChild(text);
        d.appendChild(btn);
        bnt.id=i;
        bnt.addEventListener("click",copyhascode)
        bnt.textContent="Click to Copy Hashcode"
        img.src="Img/"+img_list[i].Immagine
        div.appendChild(img)
        h1.textContent=img_list[i].titolo;
        h1.addEventListener("dblclick",change);
        h1.id="H"+i;

        p.innerHTML="Data</br>"+img_list[i].data;
        p2.innerHTML="Tag</br>"+img_list[i].tags;
        
        textcontent.appendChild(h1);
        textcontent.appendChild(d)
        
        textcontent.appendChild(p);
        textcontent.appendChild(b);
        textcontent.appendChild(p2);
        textcontent.appendChild(bnt)

        textcontent.appendChild(like)
        
        if(arr.indexOf(i)===0||arr.indexOf(i)===img_list.length-1){
            div.className="none"
        }
        else if (arr.indexOf(i)===3){
            div.className="first"
            div.appendChild(textcontent)
            
        }
        else{
            div.className="second"
        }

        document.getElementById("ImgBlock").appendChild(div)
    }
    
    
}
function lik(e){
    document.getElementById(e.target.id).src="Img/like.png"
    let i = e.target.id.split("")[0]
    img_list[i].dislike.like++;
    console.log(img_list[i].dislike.like)
}
function dislike(e){
    document.getElementById(e.target.id).src="Img/dislike.png"
    let i = e.target.id.split("")[0]
    img_list[i].dislike.dislike++;
    console.log(img_list[i].dislike.dislike)
}
function changedate(e){
    let i=e.target.id.split("")[1];
    document.getElementById(e.target.id).className="none"
    document.getElementById("y"+i).className="see";
}
function subdate(e){
    let i=e.target.id.split("")[1];
    let str = document.getElementById("d"+i).value;
    console.log(str)
    
    console.log(i)
    document.getElementById("P"+i).innerHTML="Data</br>"+str;
    img_list[i].data=str
    document.getElementById("P"+i).className="see";
    document.getElementById("y"+i).className="none";
}
function copyhascode(e){
    i = e.target.id
    navigator.clipboard.writeText(img_list[i].hashcode);
    alert("Copied the text: " + img_list[i].hashcode);
}
function change(e) {
    i = e.target.id;
    document.getElementById(i).className="none";
    document.getElementById(i+"d").className="see";

}
function sub(e){
    i=e.target.id;
    let str = document.getElementById(i+"t").value;
    console.log(str)
    let ri=i.split("")[1];
    console.log(ri)
    document.getElementById("H"+ri).textContent=str;
    img_list[ri].titolo=str
    document.getElementById("H"+ri).className="see";
    document.getElementById("H"+ri+"d").className="none";
}
function keypress(event){
    if(event.key==="ArrowRight"){
        nextimg()
    }
    if(event.key==="ArrowLeft"){
        preimg()
    }
}