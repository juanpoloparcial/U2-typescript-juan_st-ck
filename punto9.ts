// PUNTO 9. CLASE CON PROPIEDADES PRIVADAS.

// Modificar la clase Car para que la propiedad make sea privada.
// Añade un método getMake(), que devuelva el valor de make.


class CarPrivado {
    private make: string =""; 

    constructor(make: string) {
        this.make = make;
    }

drive(): void {
    console.log(`Juancho is Driving a ${this.make}`);
}

getMake(): string {
    return this.make;
    }
}

let auto3 = new CarPrivado("BMW");
auto3.drive();
console.log(auto3.getMake());
