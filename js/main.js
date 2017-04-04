//alert("hola");
var bombas= document.getElementsByName("bomba");
var pistaNum= document.getElementsByName("num");
var btnVacio= document.getElementsByName("vacio");

console.log(bombas);

function numero(){
    pistaNum.value="x";
alert("Bomba cerca CUIDADO!!!");
}

function vacio(){
    btnVacio.style= "background-color: #FF9900"; 

}
function bomba(){
    alert("Kabooooooom!!!!! GAME OVER");
}

function play(){
    alert("Jugemos!!!!");
}


bombas[0].addEventListener( 'click,bomba);
//pistaNum.addEventListener("click",numero);
//btnVacio.addEventListener("click",vacio);
document.addEventListener("click",play);