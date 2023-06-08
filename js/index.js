//FORMULARIO
let campo = document.querySelector('.search')
let aviso = document.querySelector('.alert')
let formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(evento){  
    evento.preventDefault()
    console.log("Error. Sin enviar")
if (campo.value == "") {
    aviso.innerText = 'El campo no puede estar vacío';
    campo.style.outline = '2px solid red'
    aviso.style.color = 'red'
}
else if (campo.value.length < 3){
    aviso.innerText = 'Minimo 3 caracteres';
    campo.style.outline = '2px solid red'
    aviso.style.color = 'red'
}
else {
    this.submit()
}
})

//cada seccion tiene un url y un fetch propio

//priurl canciones
let priurl = ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks");


fetch(priurl)

.then(function(respuesta){
return respuesta.json();
})
    .then(function(data){
        console.log(data)
        let info = data.data; /* el results es generico y contiene el array*/
        let prisection = document.querySelector('.canciones');
        let contenido = []; /* comienza vacia porque es la lista a la que se le van a ir agregando cosas*/

    for (let i = 0; i < info.length; i++){ // i++ se va iterando
        contenido+= `<article class="cajas-track">
        <a href="./detail-song.html?id=${info[i].id}">
        <img src=${info[i].artist.picture} alt='' />
        <h3>Title: ${info[i].title} </h3>
        <h4>Artist: ${info[i].artist.name}</h4>
        </a>
        </article>`
    
    }
        prisection.innerHTML += contenido;

    })
    .catch(function(error){
        console.log('El error es' + error);
    })

//segurl albums
let segurl = ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums")
fetch(segurl)
.then(function(respuesta){
    return respuesta.json();
})

.then(function(data){
    console.log(data);
    let info = data.data /* el results es generico y contiene el array*/
    let segsection = document.querySelector('.albumes');
    let contenido = []; /* comienza vacia porque es la lista a la que se le van a ir agregando cosas*/

    for (let i = 0; i < info.length; i++) { //i++ se va iterando
    contenido+= `<article class="cajas-album">
    <a href="./detail-album.html?id=${info[i].id}">
    <img src=${info[i].cover} alt='' />
    <h3>Title: ${info[i].title} </h3>
    </a>
    </article>`
    }
    segsection.innerHTML += contenido
})

.catch(function(error){
    console.log('El error es' + error);
})

//terurl artist
let terurl = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists"
fetch(terurl)
.then(function(respuesta){
    return respuesta.json();
})

.then(function(data){
    console.log(data);
    let info = data.data; /* el results es generico y contiene el array*/
    let tersection = document.querySelector(".artistas")
    let contenido = []; /* comienza vacia porque es la lista a la que se le van a ir agregando cosas*/

    for (let i = 0; i < info.length; i++) { //i++ se va iterando
    contenido+= `<article class="cajas-artist">
    <a href="./detail-artist.html?id=${info[i].id}">
    <img src=${info[i].picture} alt='' />
    <h3>Name: ${info[i].name} </h3>
    </a>
    </article>`

    }
    tersection.innerHTML += contenido
})

.catch(function(error){
    console.log('El error es' + error);
})

