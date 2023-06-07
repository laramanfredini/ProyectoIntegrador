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
let priurl = ("https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks")

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
        <img src=${info[i].artist.picture} alt='' />
        <p>title: ${info[i].title} </p>
        </article>`
    
    }
        prisection.innerHTML += contenido;

    })
    .catch(function(error){
        console.log('El error es' + error);
    })

//segurl albums
let segurl = ("https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/albums")
fetch(segurl)
.then(function(respuesta){
    return respuesta.json();
})

.then(function(data){
    console.log(data);
    let info = data.results /* el results es generico y contiene el array*/
    let segsection = document.querySelector(".albumes")
    let contenido = ""; /* comienza vacia porque es la lista a la que se le van a ir agregando cosas*/

    for (let i = 0; index < 6; i++) { /*i++ se va iterando
    contenido+= seguir aca*/

    }
    segsection.innerHTML += contenido
})

.catch(function(error){
    console.log('El error es' + error);
})

//terurl artist
let terurl = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/artists"
fetch(terurl)
.then(function(respuesta){
    return respuesta.json();
})

.then(function(data){
    console.log(data);
    let info = data.results /* el results es generico y contiene el array*/
    let tersection = document.querySelector(".artistas")
    let contenido = ""; /* comienza vacia porque es la lista a la que se le van a ir agregando cosas*/

    for (let i = 0; i < 6; i++) { /*i++ se va iterando
    contenido+= seguir aca*/

    }
    tersection.innerHTML += contenido
})

.catch(function(error){
    console.log('El error es' + error);
})


