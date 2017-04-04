//alert("hola");

function numero(){
alert("Bomba cerca CUIDADO!!!")
pistaNum.innerHTML="x";
}

function vacio(){
    this.style.backgroundColor= "teal"; 
}

function bomba(){
    alert("Kabooooooom!!!!! GAME OVER");
}

function play(){
    alert("Let's play!!!!");
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


//document.addEventListener("click",play);
