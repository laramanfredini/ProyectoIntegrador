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
let idArtista = qsToObject.get('id');

let artistas1 = document.querySelector('.artist-details')

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/' + idArtista) 
    .then(function (res) {
        return res.json();
    })

    .then(function (data) {
        console.log(data);
        artistas1.innerHTML += `
        <article class="artistbox">
        <img src="${data.picture}">
        <p>${data.name} </p>
        </article>`
    })

    .catch(function (error) {
        console.log(error);
    })

//Fetch para traer las albums
fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/' + idArtista+ "/albums") 
.then(function (res) {
    return res.json();
})

.then(function (data) {
    console.log(data);
    let listaAlbum = document.querySelector('.artist-album')
    let info = data.data
    let contenido = []

    for (let i = 0; i < 5; i++) { //i++ se va iterando
        contenido += `<article class="artistAlbum">
<a href="./detail-album.html?id=${info[i].id}">
<h3>Title: ${info[i].title} </h3>
</a>
</article>`}
listaAlbum.innerHTML += contenido
})

.catch(function (error) {
    console.log(error);
})


document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
  });