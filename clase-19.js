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

var personas = [jose, pedro, lucas, juanito, mariposita];

const pasarAlturaACms = (persona) => {
  // persona.altura = persona.altura * 100;
  return {
    ...persona,
    altura: persona.altura * 100,
  };
}

var personasCms = personas.map(pasarAlturaACms);

console.log(personasCms);
