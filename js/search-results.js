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
/*let string = location.search
let data = new URLSearchParams(string);
let busqueda = data.get("q")
let endpointSearch = `https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=${busqueda};`

fetch(endpointSearch)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data);

        let resultados = document.querySelector(".resultados");
        let results = [];
        for (let i = 0; i < datos.data.length; i++) {
            results += `
<h2> ${data.data[i].title}</h2>
<img src= "${data.data[i].album.cover_medium}"/>
<h3> Artist: ${data.data[i].artist.name} </h3>
<p> Album: ${data.data[i].album.title} </p>`;
        }
        resultados.innerHTML += results

    })
    .catch(function (error) {
        console.log(error);
    })

document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
*/


let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get("q");
let urlm = `https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=${busqueda}`

fetch(urlm)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let tituloBusqueda = document.querySelector(".textoPrinci")


        if (data.data.length == "") {
            tituloBusqueda.innerText = `No se ha encontrado resultado de busqueda para: ${busqueda}`
        }
        else {
            tituloBusqueda.innerText = `Resultado de busqueda para: ${busqueda}`
        }
        let srul = document.querySelector(".resultados")
        for (let i = 0; i < data.data.length; i++) {
            
            srul.innerHTML += `<article>
              <h2> ${data.data[i].title}</h2>
<img src= "${data.data[i].album.cover_medium}"/>
<h3> Artist: ${data.data[i].artist.name} </h3>
<p> Album: ${data.data[i].album.title} </p> </article>`;
        }

    })
    .catch(function (error) {
        console.log(error);
    })
