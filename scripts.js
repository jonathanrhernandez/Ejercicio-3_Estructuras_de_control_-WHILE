// 1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

let numero = Number(prompt("Ingresa un nùmero y te dire los multiplos de 5 desde el 1 hasta el nùmero ingresado"));

let multiplo = [];

if ( !isNaN(numero)) {

    let valor = 1;    
    while (valor <= numero) {
        if(valor % 5 == 0){
            multiplo.push(valor);
        }
    valor++;
    }
    console.log(`Los nùmeros desde 1 hasta ${numero} que son multiplos de 5 son: `,  multiplo);    
}
else{
    console.log("El valor ingresado no es un nùmero");
}

// 2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.

let numero2 = Number(prompt("Ingresas un número entre 1 y 50"));
let numero3 = Number(prompt("Ingresas otro número entre 1 y 50"));
let number = 1;
let loteria = [];

if(!isNaN(numero2) && !isNaN(numero3)){
    while(number <=50){
        if(number == numero2 || number == numero3){
            loteria.push(number + " Loteria!!");
        }
        else{
            loteria.push(number);
        }
        number++;
    }
    console.log(loteria);
}
else{
    console.log("Uno o ambos números ingresados no son validos");
}

// 3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.

let numeroSolicitado;
let valorInicial = 1;
let numerosAgregados = [];

do {
    numeroSolicitado = Number(prompt("Ingresa un nùmero, para dejar de capturar ingresa el 0"));
    if (!isNaN(numeroSolicitado) && numeroSolicitado != 0) {
        numerosAgregados.push(numeroSolicitado);
    }
    else if(numeroSolicitado == 0)
    valorInicial = 0;

} while (valorInicial == 1);
console.log(numerosAgregados);

// 4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.

let palabras;
let resultado = [];

do {
    palabras = prompt("Escribe palabras o letras y te las voy a unir, para parar no escribas nada y da click en aceptar");
    resultado.push(palabras);
} while (palabras != "");
console.log("Aqui esta lo que escribiste: " + resultado.join(" "));

// 5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.

let diaSemana;

do {
    diaSemana = prompt("Ingresa un día de la semana: ejemplo lunes, martes, etc. Escribelo en texto, en minuscula y sin acentos ni espacios");
    switch (diaSemana) {
        case "lunes":  
        alert("Buen inicio de semana");
            break;
        case "martes":
            alert("Ni te cases ni te embarques");
            break;
        case "miercoles":
            alert("Feliz ombligo de semana");
            break;
        case "jueves":
            alert("Es juebebes");
            break;
        case "viernes":
            alert("Ten un buen fín de semana");
            break;
        case "sabado":
            alert("A seguir descansando en familia");
            break; 
        case "domingo":
            alert("Ve a descansar");
            break;            
        default:
            alert("El valor ingresado no es un dìa de la semana");
            break;
    }
} while (diaSemana != "domingo");
