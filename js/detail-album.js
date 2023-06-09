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


let queryString = location.search;
let qsToObject = new URLSearchParams(queryString);
let idAlbum = qsToObject.get('id');

let album1 = document.querySelector('.album-details')

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/' + idAlbum) 
    .then(function (res) {
        return res.json();
    })

    .then(function (data) {
        console.log(data);
        album1.innerHTML += `
        <article class="albumbox">
        <img src="${data.cover}">
        <p>${data.title} </p>
        <p>${data.artist.name} </p>
        <p>${data.genres.data[0].name} </p>
        <p>${data.release_date} </p>
        </article>`
    })

    .catch(function (error) {
        console.log(error);
    })
