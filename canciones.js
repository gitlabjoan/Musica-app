// - crearCancion
// - leerCancion a parrtir del titulo
// - editarArtista a partir del titulo
// - borrarCancion a partir del titulo
// - listarCanciones listar todas lac canciones
// - ordenarCanciones según artirsa o año

const {crearCancion,leerCancion, editarArtista, borrarCancion, listarCanciones,ordenarCanciones} = require('./app.js');
/* sin YARGS
crearCancion('Dimelo Flow', 'Pirueta ft. Arcangel',2020);
leerCancion('Dimelo Flow');
editarArtista('Dimelo Flow', 'Pirueta ft. Arcangel, Chencho Corleone, Myke Towers, Wisin y Yandel');
borrarCancion('Cancion2');
listarCanciones();
ordenarCanciones('artista'); */
const yargs = require('yargs');

  yargs.command({
      command: 'add',
      describe: 'txt',
      builder: {
          nombre: {
              alias: 'n',
              describe: 'txt',
              demandOption: true,
              type: 'string'
          },
          artista: {
              alias: 'a',
              describe: 'example',
              demandOption: true,
              type: 'string'
          },
          anio: {
            describe: 'example',
            demandOption: true,
            type: 'string'
        }

      },
      handler(argv) {
        crearCancion(argv.nombre, argv.artista, argv.anio)
      }
  })

  yargs.command({
    command: 'read',
    describe: 'txt',
    builder: {
        nombre: {
            alias: 'n',
            describe: 'txt',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv) {
        leerCancion(argv.nombre)
    }
})

yargs.command({
    command: 'edit',
    describe: 'txt',
    builder: {
        nombre: {
            alias: 'n',
            describe: 'txt',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv) {
        editarArtista(argv.nombre)
    }
})

yargs.command({
    command: 'erase',
    describe: 'txt',
    builder: {
        nombre: {
            alias: 'n',
            describe: 'txt',
            demandOption: true,
            type: 'string'
        }
      },
    handler(argv) {
        borrarCancion(argv.nombre)
    }
})

yargs.command({
    command: 'list',
    describe: 'txt',
    builder: {
    },
    handler(argv) {
        listarCanciones()
    }
})

yargs.command({
    command: 'sort',
    describe: 'txt',
    builder: {
        nombre: {
            alias: 'n',
            describe: 'txt',
            demandOption: true,
            type: 'string'
        },
        artista: {
            alias: 'a',
            describe: 'example',
            demandOption: true,
            type: 'string'
        },
        anio: {
          describe: 'example',
          demandOption: true,
          type: 'string'
      }

    },
    handler(argv) {
        ordenarCanciones(argv.nombre, argv.artista, argv.anio)
    }
})

  yargs.parse()