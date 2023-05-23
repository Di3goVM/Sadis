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

//carrusel

var slideIndex = 0;
var slides = document.getElementsByClassName("deslizar")[0].getElementsByTagName("img");

function showSlide() {
  for (var i = 0; i < slides.length; i++) {
  	slides[i].style.display = "none";
    slides[i].classList.remove("activo");
  }
  slides[slideIndex].classList.add("activo");
  slides[slideIndex].style.display = "block";
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide();
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide();
}

showSlide();

const carruselAutomatico = setInterval(()=>nextSlide(),5000);






