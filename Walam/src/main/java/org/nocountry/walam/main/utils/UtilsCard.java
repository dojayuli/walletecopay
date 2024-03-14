package org.nocountry.walam.main.utils;

import java.util.Random;

public final class UtilsCard {
    public static String cardNumberGenerator(){
        StringBuilder debitSection= new StringBuilder("4000"); // Creamos una variable y del tipo StringBuilder y instanciamos un objeto pasandole por parametro la primera parte del numero en este caso 4000 que hace referencia a debito
        Random random= new Random();//Creamos una variable del tipo Random instanciamos un objeto de la clase Random
        for (int i = 0; i < 3; i++){ //iniciamos un bucle for iniciando en 0 que va a repetirse hasta que i sea menos que 3 (osea 2)
            int section = random.nextInt(10000);// usamos nuevamente el metodo nextInt de la clase Random pasandole como limite 9999(osea dara valores de 0 a 9999)
            String stringSection= String.format("%04d",section); //le damos formato de string al numero que generamos en la linea anterior y si este es menor de 4 digitos le agrega 0 adelante hasta que sean 4 digitos, %es el indicador que estamos declarando un argumento para ser formatear, 04 indica que se deben usar 4 caracteres y en caso de que sean menos se agregan 0 por eso el 0 esta antes que el 4, d indica que es un numero entero
            debitSection.append(" ").append(section);// utilizamos el metodo append de StringBuilder para contaquetar debitsection con los numeros que estamos generando aleatoriamente, primero que concatenamos un espacio y luego el numero generado.
        }
        return debitSection.toString();// retornamos el numero creado con las 4 secciones separadas por espacios pero el metodo se decalro como un de tipo String por eso lo pasamos String con el metodo toString de StringBuilder
    }

    public static int cvvGenerator(){
        Random random= new Random(); //Creamos una instancia de la clase Random.

        return random.nextInt(900)+100; // Usamos el metodo nextInt de la Clase Random en la instancia random, este genera un numero aleatorio de 0(inclucive) y el 900(es el limite osea que los numeros van a ser de 0-899) y le sumamos 100 para llegar a un rando de 100-999
    }
}
