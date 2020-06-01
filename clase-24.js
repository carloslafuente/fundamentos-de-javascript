function heredaDe (prototipoHijo, prototipoPadre) {
  var fn = function () {};
  fn.prototype = prototipoPadre.prototype;
  prototipoHijo.prototype = new fn;
  prototipoHijo.prototype.constructor = prototipoHijo;
}

function Persona (nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = 20;
  this.altura = altura;
  return this;
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
};

Persona.prototype.esAlta = function () {
  return this.altura > 1.8;
};

function Desarrollador(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador.`)
}

// var carlos = new Persona('Carlos', 'La Fuente', 1.75);
// var juan = new Persona('Juan', 'Suarez', 1.81);
// var maria = new Persona('Maria', 'Perez', 1.60);
