alert("bienvenido a electro fernandez");

let metroCable = prompt("ingrese sus metros de cable");
alert("metro cable " + metroCable);

let cuotas = prompt ("quiere financiarlo en cuotas");
console.log("¿cuantas cuotas quiere? " + cuotas);

let financiacion = prompt ("tiene 3 o 6 sin interes")
console.log ("selecciono " + financiacion)

//variables

const precioCable = 10

//funcion

function resultado(metroCable,precioCable) {
    console.log(metroCable)
    console.log(precioCable)
    
    let resultado = metroCable * precioCable;
    
    console.log("cotizacion " + resultado)
   
    if (financiacion==3){

        let B=(metroCable*precioCable)/financiacion;
        console.log("cuota fija "+B);
    } 
     if (financiacion==6){

        let B=(metroCable*precioCable)/financiacion;
        console.log("cuota fija "+B);
     }
    };
    
    resultado(metroCable,precioCable);
    

