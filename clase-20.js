var jose = {
  nombre: 'Jose',
  apellido: 'Lopez',
  edad: 28,
  altura: 1.75,
  cantidadDeLibros: 80
};

var pedro = {
  nombre: 'Pedro',
  apellido: 'Hernandez',
  altura: 1.5,
  cantidadDeLibros: 90
};

var lucas = {
  nombre: 'lucas',
  apellido: 'Thomas',
  altura: 1.82,
  cantidadDeLibros: 95
};

var juanito = {
  nombre: 'Juanito',
  apellido: 'La rosita',
  altura: 1.80,
  cantidadDeLibros: 87
};

var mariposita = {
  nombre: 'Mariposita',
  apellido: 'Rodriguez',
  altura: 1.95,
  cantidadDeLibros: 55
};

var personas = [jose, pedro, lucas, juanito, mariposita];

const pasarAlturaACms = (persona) => {
  // persona.altura = persona.altura * 100;
  return {
    ...persona,
    altura: persona.altura * 100,
  };
}

var personasCms = personas.map(pasarAlturaACms);

// var acum = 0;

// for (var i = 0; i < personas.length; i++) {
//   acum = acum + personas[0].cantidadDeLibros;
// }

const reducer = (acum, persona) => {
  return acum + persona.cantidadDeLibros
};

var totalDeLibros = personas.reduce(reducer, 0);

console.log(`El numero total de libros leidos es de: ${totalDeLibros} libros`);
