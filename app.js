const iniciarAgregar = document.querySelector('.btn_iniciarAgregar');
const agregar = document.querySelector('.btn_agregar');
const iniciarEliminar = document.querySelector('.btn_iniciarEliminacion');
const borrar = document.querySelector('.btn_borrar');


const app = new Sadis();

//materias:
	//anotarmte	
	iniciarAgregar.addEventListener('click',() => app.anotarMateria());
	agregar.addEventListener('click',() => app.anotarMateria());
	//eliminar
	iniciarEliminar.addEventListener('click',() => app.borrarMateria());
	borrar.addEventListener('click',() => app.borrarMateria());





