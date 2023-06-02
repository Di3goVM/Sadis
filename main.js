const practicas = document.querySelectorAll('.practicas');
const ingles = document.querySelectorAll('.ingles');
const ingenieria = document.querySelectorAll('.ingenieria');
const materias = document.querySelectorAll('.materia');

/*materias y horarios*/


const pintar = (materia)=>{
	if(materia.classList.contains('activarPracticas')){
		practicas.forEach(item =>{
				item.classList.toggle('pracAct');
		})
	}
	if(materia.classList.contains('activarIngles')){
		ingles.forEach(item =>{
				item.classList.toggle('ingAct');
		})
	}
	if(materia.classList.contains('activarIngenieria')){
		ingenieria.forEach(item =>{
				item.classList.toggle('ingeAct');
		})
	}
}

materias.forEach(materia =>{
	materia.addEventListener('click',()=> pintar(materia))
})

/*reloj*/

const reloj = document.querySelector('.reloj');
const tiempo = document.querySelector('.tiempo');
let estado = false;
let darTiempo;

reloj.onclick = ()=>{
	if(estado == false){
		darTiempo = setInterval(()=>{
			const local = new Date();
			let hora = local.getHours();
			let minutos = local.getMinutes();
			let segundos = local.getSeconds();


			segundos = segundos.toString().padStart(2, "0");
			minutos = minutos.toString().padStart(2, "0");
			hora = hora.toString().padStart(2, "0");


			tiempo.innerHTML = `${hora}:${minutos}:${segundos}`;
		},1000);
		estado = true;
	}else{
		estado = false;
		clearInterval(darTiempo);
		tiempo.innerHTML = `Calendario`;

	} 
}

/* elegir carrera*/

const carrera = document.querySelector('.elegirCarrera');
const btnCarrera = document.querySelector('.carrera');

btnCarrera.onclick = ()=>{
	if( carrera.style.height === '0px'){
		carrera.style.height = '40px';
	}else{
		carrera.style.height = '0px';
	}
};

/*volver a menu principal*/

const menuPrincipal = document.querySelector('.logo');

menuPrincipal.onclick = ()=> window.location = "main.html";
