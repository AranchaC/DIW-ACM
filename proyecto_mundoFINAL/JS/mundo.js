/*
Fichero creado:  10/01/2024
Grupo daw :  proyecto mundo 
Descripción: 
1) realiza la función de cambiar modo noche a modo día
2) captura el evento (mouseover) de las pequeñas imágenes del escritorio para ponerla como una imagen más grande.
*/ 


// cambio modo dia/noche
const checkbox = document.getElementById('toggleTheme');
const body = document.getElementsByTagName('body');

checkbox.addEventListener('change', function () {
  if (body[0].classList.contains('tema-claro')) {
    body[0].classList.replace('tema-claro', 'tema-oscuro')
  } else {
    body[0].classList.replace('tema-oscuro', 'tema-claro')
  }
});


// captura evento mouseover

// rellenamos  el mapa con imágenes
let mapimagen = new Map();

for (let i = 1; i < 5; i++) {

  console.log(i);
  mapimagen.set(i, `./imagenes/img${i}.jpeg`);
  console.log(i);
}

//recuperamos  html y las cajitas donde están las imágenes pequeñas 
let imagenPrincipal = document.getElementById("imagen-principal");
let cajitas = document.querySelectorAll('[class *= "caja-"]');

// capturamos el evento y llamamos a la funcion
for (let i = 0; i < cajitas.length; i++) {

  cajitas[i].addEventListener("mouseover", () => accion(i+1));
}

// funcion que obtendra la imagen del mapa 
function accion(i) {
  console.log('Mouse sobre la caja:', i);
  console.log('Imagen seleccionada:', mapimagen.get(i));
  imagenPrincipal.style.backgroundImage = `url(${mapimagen.get(i)})`;

}




