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
let qsToObject = new URLSearchParams (queryString);
let idCancion = qsToObject.get ('id'); 


let canciones1 = document.querySelector ('.track-details')

fetch ('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/' + idCancion)
  
  .then (function(detalle) {
  return detalle.json();
  })

  .then (function(tracks){
    console.log (tracks)
  
    
    canciones1.innerHTML = `

    <article class="trackbox">
    <img src="${tracks.album.cover}" alt="fotoboh" class="fotobohemian track">
    
    <p>${tracks.title} </p>
    <a href="./detail-artist.html"> ${tracks.artist.name}</a>
    <a href="./detail-album.html"</a>
    <br>
    <a href="./detail-album.html">${tracks.album.title}</a>
    </article>`
})