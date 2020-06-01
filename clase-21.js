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
  if (this.altura > 1.8) {
    console.log(`Soy alt@ porque mido: ${this.altura} mts.`)
  }
  else {
    console.log(`No soy alt@ porque mido: ${this.altura} mts.`)
  }
};

var carlos = new Persona('Carlos', 'La Fuente', 1.75);
var juan = new Persona('Juan', 'Suarez', 1.81);
var maria = new Persona('Maria', 'Perez', 1.60);

carlos.saludar();
