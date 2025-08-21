// UNION TYPES
// Declara una variable status que pueda ser de tipo string o número. 
// Asígnale diferentes valores para probar ambos tipos.

// Status es tambien una palabra reservada. 

let estado: string | number

estado = "Desconectado";
console.log("Status (String): ", estado);

estado = 1;
console.log("Status (Number): ",estado);