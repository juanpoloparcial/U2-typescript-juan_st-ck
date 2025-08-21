// PUNTO 8. CLASE CON CONSTRUCTOR.
// Añade un constructor a la clase Car que inicialice la propiedad make.
// Crea una instancia de Car con una marca y llama el método drive().


class CarConstructor {
    make: string="";

    constructor(make: string) {
        this.make = make;
    }

drive(): void {
    console.log(`Juancho is Driving a ${this.make}`);
}
}

let auto2 = new CarConstructor("Porsche");
auto2.drive();
