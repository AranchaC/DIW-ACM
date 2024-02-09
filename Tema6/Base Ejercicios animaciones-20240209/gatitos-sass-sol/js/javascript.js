// Javascript para el modo noche
const checkbox = document.getElementById('toggleTheme');
const body = document.getElementsByTagName('body');


checkbox.addEventListener('change', function () {
  console.log("dentro")
  if(body[0].classList.contains('tema-claro')){
    body[0].classList.replace('tema-claro','tema-oscuro')
  }else{
    body[0].classList.replace('tema-oscuro','tema-claro')
  }
});

// JavaScript para el sombreado
window.addEventListener('scroll', function () {
  var encabezado = document.querySelector('header.navbar');
  if (window.scrollY > 50) {
    encabezado.classList.add('sombreado');
  } else {
    encabezado.classList.remove('sombreado');
  }
});
