// 7. Clase básica
// Define una clase Car que tenga una propiedad make (marca del coche) 
// de tipo string
// y un método drive() que imprima un mensaje en la consola 
// diciendo "Driving a [make]"

class Car{
    make:string ="";

    drive():void{
        console.log(`Juancho is Driving a ${this.make}`);
    }
}

let auto1 = new Car();
auto1.make = "Aston Martin"
auto1.drive();