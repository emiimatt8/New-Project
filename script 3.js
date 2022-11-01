alert ("Bienvenido a EFM Automotores SRL")
let nombre
do {
    nombre = prompt ("Introduzca su nombre para comenzar")
} while (nombre=="");
class provincia{
    constructor (id, nombre, zona){
        this.id = id,
        this.nombre = nombre,
        this.zona = zona
    }
}
const provincia0 = new provincia(0, "Buenos Aires", "Este");
const provincia1 = new provincia(1, "Córdoba", "Centro");
const provincia2 = new provincia(2, "Tierra del Fuego", "Sur");
const provinciaArg = [provincia0,provincia1,provincia2]
let elegirPcia =0
function elegirZonaPcia(){
    let pciaElegida = "Estas son las zonas del Pais donde tenemos concesionarias, por favor selecciones la zona para acceder"
        for (zone of provinciaArg){ 
            pciaElegida += "\n" + zone.id + "- " + zone.zona
        } 
        elegirPcia =parseInt(prompt(pciaElegida))

    return (elegirPcia)
}
let zonaPciaElegida = elegirZonaPcia()
const pcia = provinciaArg.find((provi) => provi.id === zonaPciaElegida)
alert ("Hola " + nombre + " bienvenido a la sucursal de " +  pcia.nombre )

class automotoresVw {
    constructor (id, marca, modelo, precio){
        this.id = id,
        this.marca = marca,
        this.modelo = modelo,
        this.precio = precio
    }
}
const automotor1 = new automotoresVw (0,"Volkswagen","Polo",3909000);
const automotor2 = new automotoresVw (1,"Volkswagen","Saveiro",4169000);
const automotor3 = new automotoresVw (2,"Volkswagen","Virtus",4746000);
let descuentoVw=30000
const autosVw =[]
autosVw.push (automotor1,automotor2,automotor3)
class automotoresFt {
    constructor (id, marca, modelo, precio){
        this.id = id,
        this.marca = marca,
        this.modelo = modelo,
        this.precio = precio
    }
}
const automotor4 = new automotoresFt (0,"Fiat","Mobi",2966000);
const automotor5 = new automotoresFt (1,"Fiat","Cronos",3318000);
const automotor6 = new automotoresFt (2,"Fiat","Toro",6173000);
let descuentoFt=50000
const autosFt =[]
autosFt.push (automotor4,automotor5,automotor6)
class automotoresTy {
    constructor (id, marca, modelo, precio){
        this.id = id,
        this.marca = marca,
        this.modelo = modelo,
        this.precio = precio
    }
}
const automotor7 = new automotoresTy (0,"Toyota","Yaris",3797000);
const automotor8 = new automotoresTy (1,"Toyota","Corolla",4773000);
const automotor9 = new automotoresTy (2,"Toyota","Corolla Cross",6304000);
let descuentoTy=10000
const autosTy =[]
autosTy.push (automotor7,automotor8,automotor9)
function calculoPrecio(precioLista,descuento){
    let precioFinal =precioLista-descuento
    return precioFinal
}
let opcionElegida = 0
do {
    opcionElegida = parseInt(prompt("Para seleccionar entre las marcas disponibles, ingresa el numero de la opcion que te interese: \n A- Ingresa 1 Para Volkswagen \n B- Ingresa 2 para Fiat \n C- Ingresa 3 para Toyota"))
    switch (opcionElegida) {
        case 1:
            alert ("Los modelos de Volkswagen tienen un descuento de $" + descuentoVw + " pesos por el mes en curso")
            let modelosVw
            do {         
                modelosVw = parseInt (prompt("Ahora elija entre los modelos disponibles de Volkswagen: \n A- Ingresa 1 para VW Polo \n B- Ingresa 2 para VW Saveiro \n C- Ingresa 3 para VW Virtus"))
                if (modelosVw == 1) {
                    alert ("El VW Polo tiene un valor de lista de $" + automotor1.precio + " y con el descuento queda en: $" + calculoPrecio(automotor1.precio,descuentoVw)+ "pesos" )      
                } else if (modelosVw == 2){
                    alert ("El VW saveiro tiene un valor de lista de $" + automotor2.precio + " y con el descuento queda en: $" + calculoPrecio(automotor2.precio,descuentoVw)+ " pesos" ) 
                } else if (modelosVw == 3){
                    alert ("El VW Virtus tiene un valor de lista de $" + automotor3.precio + " y con el descuento queda en: $" + calculoPrecio(automotor3.precio,descuentoVw)+ " pesos" )        
                }           
            } while ((modelosVw <1)||(modelosVw>3)||(!modelosVw));    
        break;
        case 2: 
            alert ("Los modelos de Fiat tienen un descuento de $" + descuentoFt + " pesos por el mes en curso")
            let modelosFiat
            do {         
            modelosFiat = parseInt (prompt("Ahora elija entre los modelos disponibles de Fiat : \n A- Ingresa 1 para Fiat Mobi \n B- Ingresa 2 para Fiat Cronos \n C- Ingresa 3 para Fiat Toro"))
            if (modelosFiat == 1) {
                alert ("El Fiat Mobi tiene un valor de lista de $" + automotor4.precio + " y con el descuento queda en: $" + calculoPrecio(automotor4.precio,descuentoFt)+ "pesos" )      
            } else if (modelosFiat == 2){
                alert ("El Fiat Cronos tiene un valor de lista de $" + automotor5.precio + " y con el descuento queda en: $" + calculoPrecio(automotor5.precio,descuentoFt)+ " pesos" ) 
            } else if (modelosFiat == 3){
                alert ("La Fiat Toro tiene un valor de lista de $" + automotor6.precio + " y con el descuento queda en: $" + calculoPrecio(automotor6.precio,descuentoFt)+ " pesos" )        
            }           
            } while ((modelosFiat <1)||(modelosFiat>3)||(!modelosFiat));
        break;
        case 3:
            alert ("Los modelos de Toyota tienen un descuento de $" + descuentoTy + " pesos por el mes en curso")
            let modelosToyota
            do {         
            modelosToyota = parseInt (prompt("Ahora elija entre los modelos disponibles de Toyota : \n A- Ingresa 1 para Toyota Yaris \n B- Ingresa 2 para Toyota Corolla \n C- Ingresa 3 para Toyota Corolla Cross"))
            if (modelosToyota == 1) {
                alert ("El Toyota Yaris tiene un valor de lista de $" + automotor7.precio + " y con el descuento queda en: $" + calculoPrecio(automotor7.precio,descuentoTy)+ " pesos" )      
            } else if (modelosToyota == 2){
                alert ("El Toyota Corolla tiene un valor de lista de $" + automotor8.precio + " y con el descuento queda en: $" + calculoPrecio(automotor8.precio,descuentoTy)+ " pesos" ) 
            } else if (modelosToyota == 3){
                alert ("El Toyota Corolla Cross tiene un valor de lista de $" + automotor9.precio + " y con el descuento queda en: $" + calculoPrecio(automotor9.precio,descuentoTy)+ " pesos" )        
            }           
            } while ((modelosToyota <1)||(modelosToyota>3)||(!modelosToyota));
        break;    
    }
} while ((opcionElegida <1)||(opcionElegida>3)||(!opcionElegida));
class accesoriosAt {
    constructor (id, producto, precio){
        this.id = id,
        this.producto = producto,
        this.precio = precio
    }
}
const producto1 = new accesoriosAt (0,"Turcas de Seguridad",4500);
const producto2 = new accesoriosAt (1,"Cubre carter",18000);
const producto3 = new accesoriosAt (2,"Polarizado",6000);
const producto4 = new accesoriosAt (3,"Llantas de aleación",130000);
const producto5 = new accesoriosAt (4,"Fundas para Asientos",12000);
const producto6 = new accesoriosAt (5,"Alfombras",8000);
const producto7 = new accesoriosAt (6,"Funda para Granizo",9000);
const accesoriosStock = [producto1,producto2,producto3,producto4,producto5,producto6,producto7]
const carrito = [];
let accesoriosCarrito = "Elija entre los siguientes accesorios \n"
function agregarAlCarrito() {
    let elegirAccesorios = 0
        for (acces of accesoriosStock){ 
        accesoriosCarrito += "\n" + acces.id + "- " + acces.producto + " a $"+ acces.precio
        }   
        accesoriosCarrito += "\n" + "Para cerrar el carrito presione 7" 
        elegirAccesorios =parseInt(prompt(accesoriosCarrito))

    while (elegirAccesorios != 7) {
        switch (elegirAccesorios){
            case 0: 
                carrito.push(accesoriosStock[0]) 
                alert ("Agregamos " + accesoriosStock[0].producto + " al carrito")
                break;
            case 1: 
                carrito.push(accesoriosStock[1])
                alert ("Agregamos " + accesoriosStock[1].producto + " al carrito")
                break;
            case 2:     
                carrito.push(accesoriosStock[2])
                alert ("Agregamos " + accesoriosStock[2].producto + " al carrito")
                break;
            case 3: 
                carrito.push(accesoriosStock[3])
                alert ("Agregamos " + accesoriosStock[3].producto + " al carrito")
                break;
            case 4: 
                carrito.push(accesoriosStock[4])
                alert ("Agregamos " + accesoriosStock[4].producto + " al carrito")
                break;
            case 5:
                carrito.push(accesoriosStock[5])
                alert ("Agregamos " + accesoriosStock[5].producto + " al carrito")
                break;
            case 6:
                carrito.push(accesoriosStock[6])
                alert ("Agregamos " + accesoriosStock[6].producto + " al carrito")
                break;
            default:
                alert( "Articulo inexistente")
        }
        elegirAccesorios =parseInt(prompt(accesoriosCarrito))
    }
    let prodCarrito = "Estas llevando \n \n"
    let totalAPagar = 0
    function carritoLleno(){
        for (productosCarrito of carrito){
            prodCarrito += "\n" + productosCarrito.producto
            totalAPagar += productosCarrito.precio
        }    
        alert ("Tu carrito esta listo!\n " + prodCarrito + "\n " + "Por un total de "+ totalAPagar)
    }
    carritoLleno();
}
let confirmacion
let telefono =0
do {
    confirmacion = prompt("¿Le gustaria que lo contacten para la compra del vehiculo, si elige que no el asistente se cerrará?\n Escriba Si para confirmar \n Escriba No para finalizar").toLowerCase()
    if (confirmacion === "si"){
        let telefono 
        do {
            telefono = parseInt(prompt("Dejanos tu numero de telefono para hacerte una oferta personalizada, Debe ser de 10 Digitos sin 0 y sin 15 ej: 1122334455"))
        } while ((telefono<999999999)||(telefono>=10000000000))
        let accesorios 
        do {
            accesorios = prompt("¿Le gustaria agregar accesorios a su nuevo vehiculo?\n Escriba Si para confirmar \n Escriba No para finalizar").toLowerCase()
            if (accesorios === "si"){
            agregarAlCarrito()
            alert("Gracias por confiar en EFM Automotores SRL. Un asesor se contactara con usted a la brevedad y coordinaran el metodo de pago \n \n \n Hasta luego!!!!!") 
    } else if (accesorios ==="no") {
        alert("No te preocupes, vas a poder comprar en otra oportunidad")
    }
} while ((accesorios!=="si") && (accesorios!=="no"))
    } else if (confirmacion ==="no") {
        alert("Hasta la Proxima")
    }      
} while ((confirmacion!=="si") && (confirmacion!=="no"))