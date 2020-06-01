var jose = {
  nombre: 'Jose',
  apellido: 'Lopez',
  edad: 28,
  mide: 6.3,
};

var pedro = {
  nombre: 'Pedro',
  apellido: 'Hernandez',
  mide: 5.5,
};

var lucas = {
  nombre: 'lucas',
  apellido: 'Thomas',
  mide: 5.2,
};

var juanito = {
  nombre: 'Juanito',
  apellido: 'La rosita',
  mide: 5.8,
};

var mariposita = {
  nombre: 'Mariposita',
  apellido: 'Rodriguez',
  mide: 5.5,
};

var personas = [jose, pedro, lucas, juanito, mariposita];

for (var i = 0; i < personas.length; i++) {
  var persona = personas[i];

  console.log(
    `Su nombre es ${persona.nombre} y su apellido es ${persona.apellido} mide ${persona.mide} edad ${persona.edad}`
  );
}
