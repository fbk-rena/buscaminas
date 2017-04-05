//alert("hola");
var botones= document.getElementsByTagName("button");

function numero(){
    event.stopPropagation();
    alert("Bomba cerca CUIDADO!!!")
    this.innerHTML=this.value;
}

function vacio(){
    event.stopPropagation();
    this.style.backgroundColor= "teal"; 
}

function bomba(){
    event.stopPropagation();
    alert("Kabooooooom!!!!! GAME OVER");
    for(var i =0 ;i<botones.length;i++){
    botones[i].disabled=true;
  }

}

function play(){
    alert("Let's play!!!! \nRegresa al tablero a jugar");
}

function reinicia(){
     location.reload();
}

var bombas= document.getElementsByName("bomba");
for (var i = 0; i < bombas.length; i++) {
	bombas[i].addEventListener("click",bomba);
}

var pistaNum= document.getElementsByName("num");
for (var i = 0; i < pistaNum.length; i++) {
	pistaNum[i].addEventListener("click",numero);
}

var btnVacio= document.getElementsByName("vacio");
for (var i = 0; i <  btnVacio.length; i++) {
	 btnVacio[i].addEventListener("click",vacio);
}


document.addEventListener("click",play);

var reload= document.getElementById("reload");
reload.addEventListener("click",reinicia);
