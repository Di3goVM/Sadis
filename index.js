//login

const ingresar = document.getElementById("ingresar");


ingresar.onclick = function(){
	let usuario = document.getElementById("usuario").value;
	let password = document.getElementById("password").value;

	if (usuario == "bart simpson" && password == "el barto"){
		window.location = "main.html";		
	}
	else{
		alert("usuario inexistente");
	}
};






