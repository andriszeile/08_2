//1.izaicinājums
function ievade() {
    let v=document.getElementById("nozime").value;
    document.getElementById("izvade").innerHTML="Tu ierakstīji: "+v;
}

//2.izaicinājums
function atbilde_ja(){
    document.getElementById("atb_ir").style.background="green";
}
function atbilde_nav(){
    document.getElementById("atb_nav").style.background="red";
}

//3.izaicinājums
function image(){
    document.getElementById("att").style.display="none";
}

//4.izaicinājums
function color(){
    document.body.style.background="pink";
}

//5.izaicinājums
function video(){
    document.getElementById("tr").style.visibility="visible";
}