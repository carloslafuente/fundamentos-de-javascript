const apiUrl = `https://swapi.dev/api/`;

const peopleUrl = 'people/:id';
const planetUrl = 'planet/:id';
const reqUrl = `${apiUrl}${peopleUrl.replace(':id', 1)}`;
const opts = { crossDomain: true };

$.get( reqUrl, opts, (data, resp, jq) => {
  console.log(data.name);
  console.log(resp);
  console.log(jq);
});
