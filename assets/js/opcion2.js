const numeroUsuario = parseInt(prompt("Ingrese un numero aqui del 1 al 20 :"))

for (i = 1 ; i <= numeroUsuario ; i++){
    if (numeroUsuario <= 20 ){
        const multiplicacion = i * numeroUsuario
        console.log( i + " x " + numeroUsuario + " = " + multiplicacion )
    } else{
        console.log("NUMERO INGRESADO FUERA DE RANGO")
    }
}
   

const num = 1;
for (let i = 1 ; i <= numeroUsuario ; i++){
    if (numeroUsuario <= 20 ){
    let num = 1 ;
    for (let j = 1 ;j <= i ; j++){
        num = num * j;
    }
    console.log("Factorial de " + i + " es: " + num)
    } else{
        console.log("NUMERO INGRESADO FUERA DE RANGO")
    }
}
 







// 
/* 
      
    for (j = 1; j <= numeroUsuario ; j++){
        if (numeroUsuario <= 20 ){
            const numero = 1;
        const factorial = j * (numero - 1) // 1*0 es 0 ¿?????????
           console.log("Factorial de " + j + " es: " + factorial)
    }else{
        console.log("NUMERO INGRESADO FUERA DE RANGO")
    }
}

 */