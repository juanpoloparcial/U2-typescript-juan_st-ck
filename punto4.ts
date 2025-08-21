//4. Interfaz opcional
// Modifica la interfaz Person del ejercicio anterior 
// para que la propiedad lastName sea opcional. 
// Declara un objeto que solo incluya firstName. 


interface PersonaAlternativa{
    firstName: string;
    lastName?: string;
}

let persona1: PersonaAlternativa = {
    firstName: "Juan"
};

let persona2: PersonaAlternativa = {
    firstName: "Juan",
    lastName: "Stöck"
};

console.log("Persona con solo Nombre:", persona1);
console.log("Persona con nombre y apellido:", persona2);
