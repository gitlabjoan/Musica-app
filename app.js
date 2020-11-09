const fichero = 'canciones.json';

const fs = require('fs');


const leerArchivo = function () {
    try {
        const buffer = fs.readFileSync(fichero)
        const datosString = buffer.toString()
        return JSON.parse(datosString)
    } catch (error) {
        console.log(error)  
    }
}

const crearCancion = function (nombre, artista, anio){
     const canciones = leerArchivo(); 
     const indice = canciones.findIndex((cancion) => cancion.nombre == nombre) // Comprobamos si existe la cancion
     
   if (indice === -1) {
       console.log(('Cancion añadida'))
       canciones.push({ nombre: nombre, artista:artista, anio:anio }) 
       fs.writeFileSync(fichero, JSON.stringify(canciones))
   } else {
       console.log('La cancion ya existe')
   }
}


// Leer una cancion  a partir del titulo
const leerCancion = function (titulo) {
    const canciones = leerArchivo();
    let localizarCancion = canciones.findIndex( function (cancion) { return cancion.nombre === titulo  })     
     console.log( canciones[localizarCancion]);
}


// Editar un artista a partir del parametro nombre // TERMINAR DE PLANTEAR
const editarArtista = function (nombreCancion, artista) {
    const canciones = leerArchivo()

    const indice = canciones.findIndex((cancion)=> {return cancion.nombre.toLowerCase() === nombreCancion.toLowerCase()})
    if (indice === -1) {
        console.log('Cancion no disponible');
    } else {
       canciones[indice].artista = artista
      fs.writeFileSync(fichero, JSON.stringify(canciones))
      console.log("Archivo modificado", canciones);
    }

}
editarArtista('Dimelo Flow','Pirueta ft. Arcangel ft. Joan')

// Borar una cancion a partir del título 
const borrarCancion = function (tituloCancion) {
    const canciones = leerArchivo();

    const cancionesFiltradas = canciones.findIndex( (titulo) => {return titulo.nombre.toLowerCase() === tituloCancion.toLowerCase()})

    if (cancionesFiltradas === -1) {
        console.log(`No se ha encontrado la canción: ${tituloCancion}`);
    } else {
        canciones.splice(cancionesFiltradas, 1)
        fs.writeFileSync(fichero, JSON.stringify(canciones))
    }
    
}


// Listar todas las canciones
const listarCanciones = function () {
    const cancion = leerArchivo()
    for (let i in cancion){
        console.log(cancion[i]);
    }
}


// Ordenar las canciones según aritsta o año
const ordenarCanciones = function (opcion) {
    const canciones = leerArchivo()

        canciones.sort( function (cancionA, cancionB) {
            if (cancionA[opcion] < cancionB[opcion]) {
                return -1;
            } else if (cancionA[opcion] > cancionB[opcion]){
                return 1;
            }else{
                return 0;
            }
        
    } )

    fs.writeFileSync(fichero, JSON.stringify(canciones))
    console.log("Canciones ordenadas");
   
}

module.exports = {
    crearCancion,
    leerCancion,
    editarArtista,
    borrarCancion,
    listarCanciones,
    ordenarCanciones
}
