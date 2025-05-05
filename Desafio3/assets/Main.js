const nombreProducto = "Pancho"
const precioProducto = 1500
let cantidadDeseada = prompt("Cuantos Panchos va a comprar (estan 1500 pesos)")
let precioFinal = precioProducto * cantidadDeseada
if (cantidadDeseada>=5){
    precioFinal *= 0.9;
}
alert ("Serian: $" + precioFinal)