// rutas de elementos a observar
const article1 = document.getElementById('contenido__conoseme');
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
  threshold: 0.230,
});
// lamados a los observadores
observer.observe(article1);
