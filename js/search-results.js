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

//lista de favoritos

// 1 - recuperar el storage 
let recuperoStorage= localStorage.getItem("resultados");
console.log(recuperoStorage);

//2 - tengo que transformar de JSON a array
let seleccionados = JSON.parse(recuperoStorage);
console.log(seleccionados);

// 3 - captura el contenedor de los elementos a mostrar
let lista= document.querySelector (".results");

// 4 - evaluar si el localStorage está vacío quiero indicarle al usuario que no hay favoritos seleccionados
if (seleccionados == null || seleccionados.length == 0){
    lista.innerHTML = `<p> No hay favoritos seleccionados </p>`
} else {
    // pedir a la api los dotos de todos los ids del array de personajes elegidos
    for (let i= 0; i<seleccionados.length; i++){
        buscarYMostrarFavoritos(seleccionados[i])
    }
}
function buscarYMostrarFavoritos (id){
    //fetch
    let url = `https://rickandmortyapi.com/api/character/${id}`

    fetch (url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            lista.innerHTML += `<article>
                            <img src="${data.image}">
                            <p> Nombre: ${data.name}</p>
                            
                            </article>`
        })
        .catch(function(e){
            console.log(e);
        })


}