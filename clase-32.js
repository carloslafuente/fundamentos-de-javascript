const apiUrl = `https://swapi.dev/api/`;

const peopleUrl = 'people/:id';
const planetUrl = 'planet/:id';

const opts = { crossDomain: true };

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const reqUrl = `${apiUrl}${peopleUrl.replace(':id', id)}`;
    $.get(reqUrl, opts, (data) => {
      resolve(data);
    }).fail(() => {
      reject(id);
    });
  });
}

obtenerPersonaje(1)
  .then((personaje) => {
    console.log(personaje.name);
    return obtenerPersonaje(2);
  })
  .then((personaje) => {
    console.log(personaje.name);
    return obtenerPersonaje(3);
  })
  .then((personaje) => {
    console.log(personaje.name);
    return obtenerPersonaje(4);
  })
  .then((personaje) => {
    console.log(personaje.name);
    return obtenerPersonaje(5);
  })
  .then((personaje) => {
    console.log(personaje.name);
  })
  .catch((id) => {
    console.log(`Error para el id: ${id}`);
  });

// function obtenerPersonaje(id) {
//   return new Promise((resolve, reject) => {
//     const reqUrl = `${apiUrl}${peopleUrl.replace(':id', id)}`;

//     $.get(reqUrl, opts, (data, resp, jq) => {
//       resolve(data);
//     }).fail(() => {
//       reject(`Sucedio un error al obtener el personaje con id: ${id}`);
//     });
//   });
// }

// function obtenerDatosFilm(i, name, filmUrl) {
//   const reqUrl = filmUrl;

//   $.get(reqUrl, opts, function (filmData, resp, jq) {
//     console.log(`pelicula ${i + 1} de ${name}`);
//     console.log(filmData);
//   });
// }

// obtenerPersonaje(1)
//   .then((data) => {
//     console.log(data.name);
//     for (let i = 0; i < data.films.length; i++) {
//       obtenerDatosFilm(i, data.name, data.films[i]);
//     }
//     return obtenerPersonaje(2);
//   })
//   .then((data) => {
//     console.log(data.name);
//     for (let i = 0; i < data.films.length; i++) {
//       obtenerDatosFilm(i, data.name, data.films[i]);
//     }
//     return obtenerPersonaje(3);
//   })
//   .then((data) => {
//     console.log(data.name);
//     for (let i = 0; i < data.films.length; i++) {
//       obtenerDatosFilm(i, data.name, data.films[i]);
//     }
//     return obtenerPersonaje(4);
//   })
//   .then((data) => {
//     console.log(data.name);
//     for (let i = 0; i < data.films.length; i++) {
//       obtenerDatosFilm(i, data.name, data.films[i]);
//     }
//     return obtenerPersonaje(5);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// obtenerPersonaje(1, (film) => {
//   obtenerDatosFilm(film);
// });
