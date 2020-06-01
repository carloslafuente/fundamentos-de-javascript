const apiUrl = `https://swapi.dev/api/`;

const peopleUrl = 'people/:id';
const planetUrl = 'planet/:id';

const opts = { crossDomain: true };

function obtenerPersonaje(id, callback) {
  const reqUrl = `${apiUrl}${peopleUrl.replace(':id', id)}`;

  $.get(reqUrl, opts, callback).fail(() => {
    console.log(`Sucedio un error al obtener el personaje ${id}`);
  });
}

obtenerPersonaje(1, (data, resp, jq) => {
  console.log(data.name);

  obtenerPersonaje(2, (data, resp, jq) => {
    console.log(data.name);

    obtenerPersonaje(3, (data, resp, jq) => {
      console.log(data.name);

      obtenerPersonaje(4, (data, resp, jq) => {
        console.log(data.name);
        
        obtenerPersonaje(5);
      });
    });
  });
});
