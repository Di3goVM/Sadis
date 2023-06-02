const menuPrincipal = document.querySelector('.logo');
const reloj = document.querySelector('.reloj');
const btnCarrera = document.querySelector('.carrera');
const materias = document.querySelectorAll('.materia');

const ui = new Ui();

menuPrincipal.addEventListener('click',() => ui.volverMenu());
reloj.addEventListener('click',() => ui.motrarReloj());
btnCarrera.addEventListener('click',() => ui.mostrarCarrera());
materias.forEach(materia =>{
	materia.addEventListener('click',()=> ui.mostrarMateria(materia))
})