let carruselIndex = 0;
const carruselImgs = document.querySelectorAll('.carrusel img');

function mostrarSiguienteImagen() {
  carruselImgs.forEach(img => img.style.display = "none");
  carruselIndex = (carruselIndex + 1) % carruselImgs.length;
  carruselImgs[carruselIndex].style.display = "block";
}

function iniciarCarrusel() {
  if (carruselImgs.length > 0) {
    carruselImgs.forEach(img => img.style.display = "none");
    carruselImgs[0].style.display = "block";
    setInterval(mostrarSiguienteImagen, 3000); 
  }
}

document.addEventListener("DOMContentLoaded", iniciarCarrusel);

document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    destino.scrollIntoView({ behavior: 'smooth' });
  });
});
