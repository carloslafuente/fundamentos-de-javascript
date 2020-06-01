const apiUrl = `https://swapi.dev/api/`;

const peopleUrl = 'people/:id';
const planetUrl = 'planet/:id';

const opts = { crossDomain: true };

function obtenerPersonaje(id) {
  const reqUrl = `${apiUrl}${peopleUrl.replace(':id', id)}`;

  $.get(reqUrl, opts, function (data, resp, jq) {
    console.log(data.name);
    console.log(resp);
    console.log(jq);
  });
}

obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);
