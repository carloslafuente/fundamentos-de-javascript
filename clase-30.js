const apiUrl = `https://swapi.dev/api/`;

const peopleUrl = 'people/:id';
const planetUrl = 'planet/:id';

const opts = { crossDomain: true };

function obtenerPersonaje(id, callback) {
  const reqUrl = `${apiUrl}${peopleUrl.replace(':id', id)}`;

  $.get(reqUrl, opts, function (data, resp, jq) {
    console.log(data.name);
    console.log(resp);
    console.log(jq);

    if (callback) {
      callback();
    }
  });
}

obtenerPersonaje(1, () => {
  obtenerPersonaje(2, () => {
    obtenerPersonaje(3, () => {
      obtenerPersonaje(4, () => {
        obtenerPersonaje(5);
      });
    });
  });
});

// function obtenerPersonaje(id, callback) {
//   const reqUrl = `${apiUrl}${peopleUrl.replace(':id', id)}`;

//   $.get(reqUrl, opts, (data, resp, jq) => {
//     console.log(data.name);
//     console.log(resp);

//     if (callback) {
//       callback(data.films[0]);
//     }
//   });
// }

// function obtenerDatosFilm(filmUrl) {
//   const reqUrl = filmUrl;

//   $.get(reqUrl, opts, function (data, resp, jq) {
//     console.log(data);
//   });
// }

// obtenerPersonaje(1, (film) => {
//   obtenerDatosFilm(film);
// });
