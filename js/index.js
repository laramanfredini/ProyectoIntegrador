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

//priurl
let priurl = "https://api.deezer.com/track/3135556"

fetch(priurl)

.then(function(respuesta){
return respuesta.json();
})
    .then(function(data){
        console.log(data)
        let canciones = data.results /* el results es generico y contiene el array*/
        let prisection = document.querySelector(".canciones")
        let contenido = ""; /* comienza vacia porque es la lista a la que se le van a ir agregando cosas*/

    for (let index = 0; index < info.length; index++){ /* i++ se va iterando
        contenido+= hacer todo*/
    
    }
        prisection.innerHTML += contenido

    })
    .catch(function(error){
        console.log('El error es' + error);
    })

//segurl
let segurl = "https://api.deezer.com/album/302127"
fetch(segurl)
.then(function(respuesta){
    return respuesta.json();
})

.then(function(data){
    console.log(data);
    let info = data.results /* el results es generico y contiene el array*/
    let segsection = document.querySelector(".albumes")
    let contenido = ""; /* comienza vacia porque es la lista a la que se le van a ir agregando cosas*/

    for (let index = 0; index < info.length; index++) { /*i++ se va iterando
    contenido+= seguir aca*/

    }
    segsection.innerHTML += contenido
})

.catch(function(error){
    console.log('El error es' + error);
})

//terurl
let terurl = "https://api.deezer.com/artist/27"
fetch(terurl)
.then(function(respuesta){
    return respuesta.json();
})

.then(function(data){
    console.log(data);
    let info = data.results /* el results es generico y contiene el array*/
    let segsection = document.querySelector(".artistas")
    let contenido = ""; /* comienza vacia porque es la lista a la que se le van a ir agregando cosas*/

    for (let index = 0; index < info.length; index++) { /*i++ se va iterando
    contenido+= seguir aca*/

    }
    tersection.innerHTML += contenido
})

.catch(function(error){
    console.log('El error es' + error);
})


