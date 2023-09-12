/*

Arrays

Un array es un conjunto de datos que se puede almacenar en una sola variable. Un arreglo es una estructura de datos que podemos definir como una colección de variables (que pueden ser diferentes, pero con un mismo contexto.)


*/

//Variables que están "sueltas"
let nombre = "Felipe";
let edad = 31;
let puesto = "instructor";


//Usar un array (arreglo) para "juntar" nuestras variables
//Agregamos los elementos al array separados por coma
let personasDeLaCH31 = ["Felipe", "José Angel", "Marco", "Evelyn", "Alejandro"];


//Podemos almacenar cualquier tipo de datos en un array.
let cosasRandom = ["Pelota", 31, true, undefined, null];
console.log(typeof (cosasRandom));//object
console.log(typeof (personasDeLaCH31));

//Al imprimir el tipo de dato de nuestro arreglo, obtenemos un object porque los arrays  son objetos (después veremos que tenemos muchos tipos de objetos)



//Los arreglos al ser objetos, cuentan con métodos que nos permiten manipularlos.

//Ya que tengo mi arreglo, ¿cómo podemos acceder a esta informacion?
//Para mostar la cantidad de elementos que tengo en un arreglo, usamos un método llamado length


//Método length para mostar los elementos de un array
console.log(personasDeLaCH31.length);

//declarar un array
[5, 4, 3, 2, 1]

//inicializar un array
let cuentaRegresiva = [5, 4, 3, 2, 1];

//Acceder a un elemento en específico utilizando los índices
console.log(personasDeLaCH31[0]); //Felipe
console.log(personasDeLaCH31[25]); //Undefined porque el elemento no existe

//También podemos acceder a un elemento de mi arreglo por medio de una variable.

//Declaro el índice a una variable
let index = 4;

//Paso esta variable como índice del arreglo
console.log(personasDeLaCH31[index]); //Alejandro


//Ejemplo de un array para un consultorio dental
let pacienes = [];

let dentistas = ["Dr. Smith", "Dra. García", "Dr. House", "Dr. Simi"];

//Para hacer modificaciones, usamos el indez para acceder al dato, y luego lo reasignamos
//Cambiar simi por Similares
dentistas[3] = "Similares";

dentistas[8] = "Dr. Strange";
console.log(dentistas);

console.log(typeof (dentistas[7]));

//Función para imprimir asteriscos y poner una división en al información de mi consola
function imprimirAsteriscos() {
    console.log("**********************************************");
}

//Invocación de la función
imprimirAsteriscos();

let listaDelSuper = ["Gansitos", "Coca-Colas", "Arroz", "Atún", "Verduritas"];

//Método length para conocer la longitud del array
console.log("La cantidad de elementos de mi array es de: " + listaDelSuper.length);

//Método push() para poner elemento al final de mi array
listaDelSuper.push("Jabón para ropa", "Jabón para trastes");

console.log(listaDelSuper);

// function push(){

// }

//Método  pop() para eliminar elementos del array
listaDelSuper.pop();

console.log(listaDelSuper);
console.log(listaDelSuper.length);

//Agregar un elemento al principio del array con el método unshift()
listaDelSuper.unshift("Sabritones");
console.log(listaDelSuper);

//Eliminar el primer elemento del array shift elimina elementos al inicio del array
listaDelSuper.shift();
console.log(listaDelSuper);

//Saber la posición de las verduritas
console.log(listaDelSuper.indexOf("Verduritas"));

//Método splice para agregar, eliminar o reemplazar elementos

//nombreArreglo.splice(inicio, cantidadElementosAEliminar, elementosAInsertar1, elementoAInsertar2, ...);

listaDelSuper.splice(2, 0, "Cacahuates", "Manzana");
console.log(listaDelSuper); //

listaDelSuper.splice(5, 2, "Plátano");
console.log(listaDelSuper);

//Método .map();


let numeros = [1, 2, 3, 4, 5];

//Crear otro arreglo con los números multiplicados x2 [2, 4, 6, 8, 10];
//let numerosPor2 = [2, 4, 6, 8, 10];


let numerosPorDos = numeros.map(function (numero) {
    return numero * 2;
});

/*function numerosPorDos(numero) {
    return numero * 2;
}

.map()
*/

console.log(numerosPorDos);

imprimirAsteriscos();

/*

Imaginemos que tenemos un array de pacientes. Este array tiene datos registrados como nombre, edad. Necesitamos modificar este arreglo para que revisemos  la edad de cada participante, y si la edad es mayor a 40 años, el paciente necesita una atención especial. 

    Aspectos a considerar:
    - 2 arreglos (original y el modificado)
    - Condición if
    - Función para agregar el nuevo dato a cada elemento
    - Método map()

*/

//Arreglo de pacientes original

let pacientesConsultorio = [
    {
        nombre: "Felipe",
        edad: 31,
    },
    {
        nombre: "Fátima",
        edad: 26,
    },
    {
        nombre: "Jesus",
        edad: 51,
        //estado: "Necesita atención especial",
    }
];

//función para agregar el texto "Necesita atención especial"
function agregarEstadoSalud(paciente) {
    let estado = "Saludable";

    //Si el paciente tiene más de 40 años
    if (paciente.edad > 40) {
        estado = "Necesita atención especial";
    }

    return {
        ...paciente, //copia del paciente
        estadoSalud: estado, //para agregar un nuevo campo o variable (como la edad o el nombre)
    };
}

//vamos a aplicar la función en cada elemento del arreglo con el map
let pacientesConsultorioConEstado = pacientesConsultorio.map(agregarEstadoSalud);

console.log(pacientesConsultorio);
console.log(pacientesConsultorioConEstado);


