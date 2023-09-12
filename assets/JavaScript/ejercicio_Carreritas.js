/* Ejercicio Individual - Carreritas

En una carrera se tienen los siguientes corredores con su respectiva posición:

- Primer lugar: Roberto
- Segundo lugar: Andrea
- Tercer lugar: Jorge
- Cuarto lugar: Ramiro
- Quinto lugar: Sofía

Después de 3 vueltas, Jorge adelanta a Roberto, Ramiro adelanta a Jorge y Roberto se lesiona y sale de la carrera. Además Andrea baja una posición, Ramiro mantiene su lugar y el quinto lugar es reemplazado por José

¿Cómo quedan las posiciones después de esas 3 vueltas?


    Aspectos a considerar
    - 2 Arreglos (original y el modificado)

*/

//Arreglo incial de posiciones en la carrera de cada participante
let lugaresCarrera = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofía"];
console.log(lugaresCarrera);


lugaresCarrera.splice(0, 0, "Jorge"); //Jorge reemplaza a Roberto
lugaresCarrera.splice(3, 1); //Jorge se elimina de la posición 3
console.log(lugaresCarrera);

lugaresCarrera.splice(0, 0, "Ramiro"); //Ramiro reemplaza a Jorge
lugaresCarrera.splice(4, 1); //Se elimina de la posición 4 a Ramiro
console.log(lugaresCarrera);

lugaresCarrera.splice(2, 1); //Ramiro queda eliminado de la carrera
console.log(lugaresCarrera);

lugaresCarrera.splice(2, 0, "Sofía"); //Sofía reemplaza a Andrea
lugaresCarrera.splice(4, 1); // Se elimina Sofía de la ultima posición 
console.log(lugaresCarrera);

lugaresCarrera.push("José");
console.log(lugaresCarrera);












