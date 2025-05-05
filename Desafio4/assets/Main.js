const precioUnitario = 250
let cantidadDeseada = prompt("Cuantos alfajores va a querer (estan $250 cada uno)")
function sumarProductos(precioUnitario, cantidadDeseada) {
    return precioUnitario * cantidadDeseada;
}

alert ("El total es: $" + sumarProductos(precioUnitario, cantidadDeseada));