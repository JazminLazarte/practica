function saludame(){alert("Hola..Aqui estoy!,  Aqui estoy!");}


function validar(){

var name = document.getElementById("firstname").value;


var expreg = /^[a-zA-Z]{1,20}\w[^0-9]$/;

if(expreg.test(name)==false){
	alert("El campo nombre no puede contener numeros o ser vacío");
	document.getElementById("firstname").value="";
	}


}



function validaremail(){
var email = document.getElementById("email").value;

var expregemail = /^[a-zA-Z0-9_\-\.~]{2,}@[a-zA-Z0-9_\-\.~]{2,}\.[a-zA-Z]{1,4}$/;


if(expregemail.test(email)==false){
alert("El email debe seguir el formato alguien@example.com");
document.getElementById("email").value ="";

	}

}

function validarcelular(){
var phone = document.getElementById("phone").value;

var expreg = /^9[0-9]{8}$/;


if(expreg.test(phone)==false){
	alert("Introducir celular válido ");
document.getElementById("phone").value ="";
}

}



function validarapellido(){
var lastname = document.getElementById("lastname").value;



var expreg = /^[a-zA-Z]{1,20}\w[^0-9]$/;

if(expreg.test(lastname)==false){
	alert("El campo apellido no puede contener numeros o estar vacío");
document.getElementById("lastname").value ="";
}

}