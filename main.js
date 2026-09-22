onload = () =>{
    document.body.classList.remove("container");
};
document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('cancion');
  document.body.addEventListener('click', function iniciarMusica() {
    audio.play();
    document.body.removeEventListener('click', iniciarMusica);
  });
});