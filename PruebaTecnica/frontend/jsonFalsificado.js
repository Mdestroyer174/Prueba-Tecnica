let noticias = [
    { id: 1, titular: 'Actualidad', contenido: 'Detienen a un narco en vallecas'},
    { id: 2, titular: 'Cine', contenido: 'Estreno de MadMax 3' },
    { id: 3, titular: 'Cultura', contenido: 'Abren antes las piscinas de reus'},
    { id: 4, titular: 'Futbol', contenido: 'El barça esta muy mal de fichajes'},
    { id: 5, titular: 'Moda', contenido: 'Nueva linea de verano de Gucci'}
];

let contenedorNoticias = document.getElementById('contenedor-noticias');

noticias.forEach(function(noticia) {

    let divNoticia = document.createElement('div');
    divNoticia.classList.add('noticia');

   
    let tituloNoticia = document.createElement('h2');
    tituloNoticia.textContent = noticia.titular;

 
    let contenidoNoticia = document.createElement('p');
    contenidoNoticia.textContent = noticia.contenido;

    
    divNoticia.appendChild(tituloNoticia);
    divNoticia.appendChild(contenidoNoticia);

   
    contenedorNoticias.appendChild(divNoticia);
});
