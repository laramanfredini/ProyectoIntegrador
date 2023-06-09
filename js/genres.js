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


//GENEROS
let genres = document.querySelector('.sectGenres');

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre')
    .then(function (datos) {
        return datos.json();
    })

    .then(function (info) {
        console.log(info)

        let listaGenres = []
        for (let i = 0; i < info.data.length; i++) {

            listaGenres += `
          <article class="generos">
          <a href="./detail-genres.html">
          <img src="${info.data[i].picture}">
          ${info.data[i].name}</a>
          </article> `

            console.log(info.data[i].picture);

        };
        genres.innerHTML += listaGenres;
        console.log(genres);
    })

