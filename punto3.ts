// 3. Interfaz básica
//Crea una interfaz Person con las propiedades firstName (string) y lastName (string). Declara una variable person de tipo Person y asígnale un objeto con tu nombre y
// apellido. 4. Interfaz opcional

interface Persona {
    firstName: string;
    lastName: string;
}

let persona: Persona ={
    firstName: "Juancho",
    lastName: "Stöck",
};

console.log("La persona es: ",persona.firstName, persona.lastName)