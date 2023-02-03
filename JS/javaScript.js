// --------------para el carrusel-------------
const peliculas = document.querySelectorAll('.pelicula')
const flechaDerecha = document.getElementById('flecha-derecha');
const flechaIzquierda = document.getElementById('flecha-izquierda');
const fila = document.getElementById('contenedor-carrusel');
// ---------paginacon-----------------
const numeroDePaginas = Math.ceil(peliculas.length / 5);
for (let i = 0; i < numeroDePaginas; i++) {
  const indicador=document.createElement('button');
  if (i===0) {
    indicador.classList.add("activo");
}
if (numeroDePaginas == 1) {
  flechaDerecha.style.display = "none"
  flechaIzquierda.style.display = "none"
  indicador.style.display = "none"
} else{
  flechaDerecha.style.display = "visible"
  flechaIzquierda.style.display = "visible"
}
  document.querySelector('.indicadores').appendChild(indicador);
  indicador.addEventListener('click',(e)=>{

    fila.scrollLeft =i * fila.offsetWidth;

    document.querySelector('.indicadores .activo').classList.remove('activo');
    e.target.classList.add('activo');
  })
}
flechaDerecha.addEventListener('click',()=>{
  fila.scrollLeft += fila.offsetWidth;

  const indicadorActivo = document.querySelector('.indicadores .activo');
  if (indicadorActivo.nextSibling) {
    indicadorActivo.nextSibling.classList.add('activo');
    indicadorActivo.classList.remove('activo');  
  }
});
flechaIzquierda.addEventListener('click',()=>{
  fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if (indicadorActivo.previousSibling) {
    indicadorActivo.previousSibling.classList.add('activo');
    indicadorActivo.classList.remove('activo');  
  }

});
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// rutas de elementos a observar
const article1 = document.getElementById('recomendados');
const article2 = document.getElementById('work');
const article3 = document.getElementById('habilidades');
const article4 = document.getElementById('contacto');
const article5 = document.getElementById('footer');
// funciones a ejecutar
const cargar = (entradas,observador)=>{
  entradas.forEach((entrada)=>{
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
    } else{
      entrada.target.classList.remove('visible');
    }
  })
}
// observadores de elementos
const observer = new IntersectionObserver(cargar, {
  root: null,
  rootMargin: '0px',
  threshold: 0.2,
});
// lamados a los observadores
observer.observe(article1);
observer.observe(article2);
observer.observe(article3);
observer.observe(article4);
observer.observe(article5);
// Comando de animación de escritura

var options = {
  strings: ['<i class="titulo-spam">Programador web</i>','<i class="titulo-spam">Diseñador grafico</i>','<i class="titulo-spam">Community manager</i>'],
  typeSpeed: 70,
  cursorChar:'<i class="titulo-spam">|</i>',
  loop: true,
  loopCount: Infinity,

};

var typed = new Typed('.typed', options);

