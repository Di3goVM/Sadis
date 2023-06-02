class Sadis{
	anotarMateria(){
		const filas = document.querySelectorAll('.fila');
		const btn_agregar = document.getElementById('agregar');
		const btn_iniciarAgregar = document.querySelector('.btn_iniciarAgregar');

		btn_iniciarAgregar.classList.toggle('desaparecerBtn');
		btn_agregar.classList.toggle('desaparecerBtn');

 		//seleccion de filas:
			filas.forEach((fila)=>{
				fila.addEventListener('click',()=>fila.classList.toggle("seleccionada"))
				
			});	
		//extraer y pasar informacion:

		btn_agregar.onclick = ()=>{
			//extraer informacion en un array que contiene arrays que tienen datos.
			const filasSeleccionadas = document.querySelectorAll('.seleccionada');

			let contenidoFilas = Array.from(filasSeleccionadas).map(function(filaSeleccionada){

		  		let celdas = filaSeleccionada.querySelectorAll("td");
		  		
		  		let contenidoCeldas = Array.from(celdas).map(function(celda){
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
					<div><img src="./img/contrato.png"></div>
					<span>${contenidoFilas[i][2]}</span>
					<span>${contenidoFilas[i][0]} ${contenidoFilas[i][1]}</span>
					<span>${contenidoFilas[i][3]}</span>
				`;

				materiaInscripta.innerHTML = nuevaMateria;

				const codigoMateria = contenidoFilas[i][2];

				this.seleccionarImagen(materiaInscripta, codigoMateria);

				materias.forEach(function (materia) {
			    materia.appendChild(materiaInscripta);
			  		});

			}

			filasSeleccionadas.forEach(function(elemento) {
		  	elemento.remove();
			});

		}
	}
	seleccionarImagen(materiaInscripta,codigoMateria){
	    const imagen = materiaInscripta.querySelector('img');
	    const fondo = materiaInscripta.querySelector('div');

	    if (codigoMateria === 'Sistemas Operativos') {
	      imagen.src = './img/op.png';
	    } else if (codigoMateria === 'Analisis Matematico II') {
	      imagen.src = './img/mate.png';
	    } else if (codigoMateria === 'Base de datos') {
	      imagen.src = './img/basedatos.png';
	    } else if (codigoMateria === 'Estadistica') {
	      imagen.src = './img/metric.png';    
	    } else if(codigoMateria === 'Algoritmos y Estructura de Datos'){
	      imagen.src = './img/algoritmos.png';
	    }
  	}
		
	borrarMateria(){
		const btn_borrar = document.querySelector('.btn_borrar');
		const btn_iniciarEliminacion = document.querySelector('.btn_iniciarEliminacion');
		const materiasEliminadas = document.querySelectorAll('.materia');
		const quitar = document.getElementById('quitar');
		
		btn_borrar.classList.toggle('desaparecerBtn');
		btn_iniciarEliminacion.classList.toggle('desaparecerBtn');
		
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
		}
		
	}
	anotarFinal(){
		const filas = document.querySelectorAll('.fila');
		const btn_agregar = document.getElementById('agregar');
		const btn_iniciarAgregar = document.querySelector('.btn_iniciarAgregar');

		btn_iniciarAgregar.classList.toggle('desaparecerBtn');
		btn_agregar.classList.toggle('desaparecerBtn');

 		//seleccion de filas:
			filas.forEach((fila)=>{
				fila.addEventListener('click',()=>fila.classList.toggle("seleccionada"))
				
			});	
		//extraer y pasar informacion:

		btn_agregar.onclick = ()=>{
			//extraer informacion en un array que contiene arrays que tienen datos.
			const filasSeleccionadas = document.querySelectorAll('.seleccionada');

			let contenidoFilas = Array.from(filasSeleccionadas).map(function(filaSeleccionada){

		  		let celdas = filaSeleccionada.querySelectorAll("td");
		  		
		  		let contenidoCeldas = Array.from(celdas).map(function(celda){
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
					<div><img src="./img/contrato.png"></div>
					<span>${contenidoFilas[i][2]}</span>
					<span>${contenidoFilas[i][0]} ${contenidoFilas[i][1]}</span>
					<span>${contenidoFilas[i][3]}</span>
				`;

				materiaInscripta.innerHTML = nuevaMateria;

				const codigoMateria = contenidoFilas[i][2];

				this.seleccionarImagen(materiaInscripta, codigoMateria);

				materias.forEach(function (materia) {
			    materia.appendChild(materiaInscripta);
			  		});

			}

			filasSeleccionadas.forEach(function(elemento) {
		  	elemento.remove();
			});

		}
	}
	borrarFinal(){
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
	}
}