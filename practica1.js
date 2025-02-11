/*  Descripción: Crea una clase Coche que herede de la clase Persona.
La clase Coche debe tener los siguientes atributos:

marca (string)
modelo (string)
La clase Coche debe tener un método informacionCoche() que imprima la marca y el modelo. */
var coche = /** @class */ (function () {
    function coche(marca, modelo) {
        this._marca = marca;
        this._modelo = modelo;
    }
    coche.prototype.informacionCoche = function () {
        console.log("La marca del carro es: ".concat(this._marca, " del modelo: ").concat(this._modelo, "."));
    };
    return coche;
}());
var carro = new coche("Chevrolet", "Camioneta");
console.log(carro);
