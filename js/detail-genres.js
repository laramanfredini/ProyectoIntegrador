//FORMULARIO

let campo = document.querySelector('.search')
let aviso = document.querySelector('.alert')
let formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault()
    console.log("Error. Sin enviar")
    if (campo.value == "") {
        aviso.innerText = 'El campo no puede estar vacío';
        campo.style.outline = '2px solid red'
        aviso.style.color = 'red'
    }
    else if (campo.value.length < 3) {
        aviso.innerText = 'Minimo 3 caracteres';
        campo.style.outline = '2px solid red'
        aviso.style.color = 'red'
    }
    else {
        this.submit()
    }
})
let queryString = location.search;
let qsToObject = new URLSearchParams (queryString);
let idGenre = qsToObject.get ('id'); 


let genre1 = document.querySelector ('.genre-details')

fetch ('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/' + idGenre)
  
  .then (function(res) {
  return res.json();
  })

  .then (function(data){
    console.log (data)
  
let name = document.querySelector('.name');
let image = document.querySelector('.image');
name.innerText = data.name
image.src = data.picture_big;
})


document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
  });