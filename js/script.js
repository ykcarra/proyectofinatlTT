console.log("Hola Mundo");

//Creamos una cajita, usamos let y const.

let nombre = "Gabriela"; //Guaro un valor en la variable.
let edad = 26;

console.log(nombre);

function calculadora(val){
    let num1 = parseFloat(prompt("Ingrese un numero"));
    let num2 = parseFloat(prompt("Ingrese otro numero"));

    if(!isNaN(num1) && !isNaN(num2)){
        let suma  = num1  + num2;
        console.log("Suma: " + suma);

        let resta = num1  - num2;
         console.log("Resta: " + resta);

        let multiplicacion = num1 * num2;       
        console.log("Multiplicacion: " + multiplicacion);

        if(num2 != 0){
            let division = num1 / num2;
            console.log("Division: " + division);
        }else{
            console.log("No se puede dividir por 0")
        }

        let esMayor = suma > val;
        console.log(suma.toString() +" "+ (esMayor? "Es Mayor que " + val:("Es Menor/Igual que " + val))); 

    }
}

function mayoriaDeEdad(){
    let nombre = prompt("Ingrese su nombre");
    let edad   = parseFloat(prompt("Ingrese su edad"));
    let condicion;
    if(!isNaN(edad) && edad <= 100){
        condicion =  edad >=18 ? " eres mayor, puedes pasar" : " eres menor, vuelvete a tu casa";
        console.log(nombre + " tienes " + edad + condicion)
    }else{
        console.log(nombre + " tienes " + edad + " eres inmortal!")
    }   
}

