var jose = {
  nombre: 'Jose',
  apellido: 'Lopez',
  edad: 28,
  altura: 1.75,
};

var pedro = {
  nombre: 'Pedro',
  apellido: 'Hernandez',
  altura: 1.5,
};

var lucas = {
  nombre: 'lucas',
  apellido: 'Thomas',
  altura: 1.82,
};

var juanito = {
  nombre: 'Juanito',
  apellido: 'La rosita',
  altura: 1.80,
};

var mariposita = {
  nombre: 'Mariposita',
  apellido: 'Rodriguez',
  altura: 1.95,
};

const esAlta = ({altura}) => {
  return altura > 1.8;
};

const esBaja = (persona) => {
  return persona.altura < 1.6;
};

var personas = [jose, pedro, lucas, juanito, mariposita];

var personasAltas = personas.filter(esAlta);

var personasBajas = personas.filter(esBaja);

console.log(personasAltas);

console.log(personasBajas);
