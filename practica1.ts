/*  Descripción: Crea una clase Coche que herede de la clase Persona. 
La clase Coche debe tener los siguientes atributos:

marca (string)
modelo (string)
La clase Coche debe tener un método informacionCoche() que imprima la marca y el modelo. */

class coche{
    _marca: String
    _modelo: String


    constructor(marca:String, modelo: String){
     this._marca = marca;
     this._modelo = modelo;
    }

    informacionCoche(){
        console.log(`La marca del carro es: ${this._marca} del modelo: ${this._modelo}.`)
    }

}

const carro = new coche(`Chevrolet`, "Camioneta")

console.log(carro)