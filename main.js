/* barra de navegacion */
let nav = document.querySelector('.navegacion');

nav.onclick = ()=>{
	if( nav.style.width === '70px'){
		nav.style.width = '300px';
	}else{
		nav.style.width = '70px';
	}
}