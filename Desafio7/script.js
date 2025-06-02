document.addEventListener('DOMContentLoaded', function() {

    const elementoPrecio = document.getElementById("precioProducto");

    if (elementoPrecio) {
        
        elementoPrecio.innerText = "$450";
        console.log("Precio actualizado a: " + elementoPrecio.innerText);
    } else {
        console.error("Elemento con ID 'precioProducto' no encontrado.");
    }

    const elementoTitulo = document.querySelector("#nombrePorducto");

    if (elementoTitulo) {
        elementoTitulo.style.color = "red"; 
        console.log("Color del título '" + elementoTitulo.innerText + "' actualizado a " + elementoTitulo.style.color);
    } else {
        console.error("Elemento con ID 'nombrePorducto' no encontrado.");
    }

});