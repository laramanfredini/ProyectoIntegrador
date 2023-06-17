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
let qsToObject = new URLSearchParams(queryString);
let idCancion = qsToObject.get('id');


let canciones = document.querySelector('.track-details')

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/' + idCancion)

    .then(function (res) {
        return res.json();
    })

    .then(function (data) {
        console.log(data)


        canciones.innerHTML = `

    <article class="trackbox">
    <a href="./detail-album.html"><img src="${data.album.cover}""></a>
    
    <p>${data.title} </p>
    <a href="./detail-artist.html"><p> ${data.artist.name}</p></a>
    
   <a href="./detail-album.html"> <p>${data.album.title}</p></a>
    </article>`
    })



    document.getElementById("darkModeToggle").addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
      });