const checkbox = document.getElementById('toggleTheme');
const body = document.getElementsByTagName('body');

checkbox.addEventListener('change', function () {
  if(body[0].classList.contains('tema-claro')){
    body[0].classList.replace('tema-claro','tema-oscuro')
  }else{
    body[0].classList.replace('tema-oscuro','tema-claro')
  }
});


let colores = new Map();
colores.set(0, 'red');   
colores.set(1, 'green');   
colores.set(2, 'orange');   
colores.set(3, 'black');  

let mapimagen = new Map();
mapimagen.set(0, './imagenes/img1.jpeg');   
mapimagen.set(1, './imagenes/img2.jpeg")');   
mapimagen.set(2, './imagenes/img3.jpeg');   
mapimagen.set(3, './imagenes/img4.jpeg');   


//let imagenPrincipal = document.querySelector(".imagen-principal");
let imagenPrincipal = document.getElementById("imagen-principal");
let cajitas = document.querySelectorAll('[class *= "caja-"]');


for (let i = 0; i < cajitas.length; i++) {

cajitas[i].addEventListener("mouseover", () => accion(i));
//cajitas[i].addEventListener("mouseover",accion(i)); 
}


function accion(i)
{
  // alert("hola");


  console.log('Mouse sobre la caja:', i);
  console.log('Imagen seleccionada:', mapimagen.get(i));
  imagenPrincipal.style.backgroundImage = `url(${mapimagen.get(i)})`;



  //funciona los colores 
  //imagenPrincipal.style.background = colores.get(i);

}

  //imagenPrincipal.style.backgroundImage  = `url(${mapimagen.get(2)})`;
//imagenPrincipal.style.backgroundImage = url("../imagenes/img2.jpeg");
//imagenPrincipal.style.backgroundImage= `url(${mapimagen.get(2)})`;
 //imagenPrincipal.style.backgroundImage =mapimagen[1];
 //imagenPrincipal.style.backgroundImage =url("../imagenes/img4.jpeg");