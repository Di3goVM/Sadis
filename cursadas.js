const btn_agregar = document.querySelector('.btn_agregar');
const btn_iniciarAgregar = document.querySelector('.btn_iniciarAgregar')

btn_iniciarAgregar.onclick=()=>{
	btn_iniciarAgregar.classList.toggle('desaparecerBtn');
	btn_agregar.classList.toggle('desaparecerBtn');
	iniciarAgregar();
}

const iniciarAgregar = ()=>{

 		const filas = document.querySelectorAll('.fila');
		const boton = document.getElementById('agregar');

		

 		//seleccion de filas:

		filas.forEach((fila)=>{
			fila.addEventListener('click',()=>fila.classList.toggle("seleccionada"))
			
		});

		//extraer informacion y agregarla a nueva tabla:

		agregar.onclick = function(){
			//extraer informacion en un array que contiene arrays que tienen datos.
			const filasSeleccionadas = document.querySelectorAll('.seleccionada');

			var contenidoFilas = Array.from(filasSeleccionadas).map(function(filaSeleccionada){

		  		var celdas = filaSeleccionada.querySelectorAll("td");
		  		

		  		var contenidoCeldas = Array.from(celdas).map(function(celda){
		    	return celda.textContent;
		    	});

				return contenidoCeldas;
		  	});
			//luego al tener esos datos,los transporto a otra tabla creando sus elementos necesarios.
			const materias = document.querySelectorAll('.mis_materias');

		  	for(let i = 0;i<filasSeleccionadas.length;i++){

		  	const materiaInscripta = document.createElement('li');
		  	materiaInscripta.classList.add('materia');

			const nuevaMateria = `
				<div><img src="./img/contrato.png" id="practicas"></div>
				<span>${contenidoFilas[i][2]}</span>
				<span>${contenidoFilas[i][0]} ${contenidoFilas[i][1]}</span>
				<span>${contenidoFilas[i][3]}</span>
			`;

			materiaInscripta.innerHTML = nuevaMateria;


			materias.forEach(function (materia) {
		    materia.appendChild(materiaInscripta);
		  		});

			}

			filasSeleccionadas.forEach(function(elemento) {
		  	elemento.remove();
			});

			btn_iniciarAgregar.classList.toggle('desaparecerBtn');
			btn_agregar.classList.toggle('desaparecerBtn');

		}
 }


const btn_borrar = document.querySelector('.btn_borrar');
const btn_iniciarEliminacion = document.querySelector('.btn_iniciarEliminacion');

btn_iniciarEliminacion.onclick=()=>{
	btn_borrar.classList.toggle('desaparecerBtn');
	btn_iniciarEliminacion.classList.toggle('desaparecerBtn');
	iniciarEliminar();
}

const iniciarEliminar = ()=>{
	const materiasEliminadas = document.querySelectorAll('.materia');
	const quitar = document.getElementById('quitar');



	//seleccion de materias a eliminar:

	materiasEliminadas.forEach((eliminar)=>{
		eliminar.addEventListener('click',()=>eliminar.classList.toggle("quitar"))	
	});

	//quitar materia:

	quitar.onclick = ()=>{
		const quitarMaterias = document.querySelectorAll('.quitar');
		quitarMaterias.forEach(function(elemento) {
	  	elemento.remove();
		});
		btn_borrar.classList.toggle('desaparecerBtn');
		btn_iniciarEliminacion.classList.toggle('desaparecerBtn');
	}
}






