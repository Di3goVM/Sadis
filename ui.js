 class Ui{
 	constructor(){
 		this.relojEncendido = false;
 		this.darTiempo = 0;
 	}
 	volverMenu(){
		window.location = "main.html";
 	}
 	motrarReloj(){
		const tiempo = document.querySelector('.tiempo');
		
		if(this.relojEncendido == false){
				this.darTiempo = setInterval(()=>{
					const local = new Date();
					let hora = local.getHours();
					let minutos = local.getMinutes();
					let segundos = local.getSeconds();


					segundos = segundos.toString().padStart(2, "0");
					minutos = minutos.toString().padStart(2, "0");
					hora = hora.toString().padStart(2, "0");


					tiempo.innerHTML = `${hora}:${minutos}:${segundos}`;
				},1000);
				this.relojEncendido = true;
		}else{
				this.relojEncendido = false;
				clearInterval(this.darTiempo);
				tiempo.innerHTML = `Calendario`;

		} 
		
 	}
 	mostrarCarrera(){
 		const carrera = document.querySelector('.elegirCarrera');
		const btnCarrera = document.querySelector('.carrera');

		
		if( carrera.style.height === '0rem'){
			carrera.style.height = '2.5rem';
		}else{
			carrera.style.height = '0rem';
		}
		
 	}
 	mostrarMateria(materia){
 		const practicas = document.querySelectorAll('.practicas');
		const ingles = document.querySelectorAll('.ingles');
		const ingenieria = document.querySelectorAll('.ingenieria');
		const materias = document.querySelectorAll('.materia');

		/*materias y horarios*/

		
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
 }