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

async function obtenerPersonajes() {
  var ids = [1, 2, 3, 4, 5, 6, 7];
  var promesas = ids.map((id) => {
    return obtenerPersonaje(id);
  });
  try {
    var personajes = await Promise.all(promesas);
    console.log(personajes);
  } catch (id) {
    (id) => {
      console.log(`No se pudo obtener el personaje con el id: ${id}`);
    };
  }
}

obtenerPersonajes();
