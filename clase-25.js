class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 20;
    this.altura = altura;
  }

  saludar(fn) {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);

    if (fn) {
      fn(this.nombre, this.apellido);
    }
  }

  esAlta() {
    return this.altura > 1.8;
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura, experiencia) {
    super(nombre, apellido, altura);
    this.experiencia = experiencia;
  }

  saludar (fn) {

    var {nombre, apellido} = this;

    console.log(
      `Hola, me llamo ${nombre} ${apellido} y soy desarrollador.`
    );
    
    if (fn) {
      fn(nombre, apellido, true);
    }
  };
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen dia ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`Ah, no sabia que eras dev`);
  }
}

var carlos = new Persona('Carlos', 'La Fuente', 1.75);
var juan = new Persona('Juan', 'Suarez', 1.81);
var maria = new Desarrollador('Maria', 'Perez', 1.6);

carlos.saludar();
juan.saludar(responderSaludo);
maria.saludar(responderSaludo);
