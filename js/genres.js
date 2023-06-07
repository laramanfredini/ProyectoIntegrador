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


//GENEROS
let urlGenres ='https://api.allorigins.win/raw?url=https://api.deezer.com/genre';

fetch (urlGenres)
  .then(function(res) {
  return res.json();
  })

  .then(function(data){
    console.log (data);
     let info  = data.data
     let section = document.querySelector ('.section');
     let contenido = []
     for (let i = 0; i<info.length; i++){

      contenido += `<ul>
      <a href="./detail-genres.html?id=${info.data[i].id}">
      <h3>Title: ${info[i].name} </h3></a>
      </ul>`

          console.log(info.data[i].picture);
  
      };
      section.innerHTML +=contenido;
     })
     .catch(function(error){
        console.log('El error es' + error);
    })

