// 10. Herencia de clases
// Crea una clase ElectricCar que extienda de Car e incluya una propiedad
//  adicional
// batteryLife (vida de la batería) de tipo número. 
// Añade un método charge() que
// imprima un mensaje diciendo que el coche se está cargando.


class CarPrivado {
    protected make: string =""; 

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

class ElectricCar extends CarPrivado {
    batteryLife: number;

    constructor(make: string, batteryLife: number) {
        super(make); 
        this.batteryLife = batteryLife;
    }

    charge(): void {
        console.log(`El ${this.make} está cargando. El % de bateria es de : ${this.batteryLife} hours`);
    }
}

let tesla = new ElectricCar("Uber", 15);
tesla.drive();
tesla.charge();