//login

const ingresar = document.getElementById("ingresar");


ingresar.onclick = ()=>{
	let usuario = document.getElementById("usuario").value;
	let password = document.getElementById("password").value;

	if (usuario == "Bart Simpson" && password == "el_barto123"){
		window.location = "main.html";		
	}
	else{
		alert("usuario inexistente(por favor recuerda respetar las mayusculas y minusculas)");
	}
};

//carrusel

let slideIndex = 0;
let slides = document.getElementsByClassName("deslizar")[0].getElementsByTagName("img");

function showSlide() {
  for (let i = 0; i < slides.length; i++) {
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






