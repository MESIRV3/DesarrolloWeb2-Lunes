let Productos = [
{id:1, nombre: "Coca-Cola", stock:10},
{id:2, nombre:"Sprite", stock:11},
{id:3, nombre:"Fanta", stock:12},
{id:4, nombre:"Levite", stock:13},
{id:5, nombre:"Placer", stock:14}
]

function mostrarInventario(){
    console.log('\nProductos disponibles:');
    console.log('ID\tNombre\t\tStock');
    console.log('-----------------------');
    Productos.forEach(producto => {
      console.log(`${producto.id}\t${producto.nombre.padEnd(10)}\t${producto.stock}`);
    });
  }

  function buscarProducto(id) {
    return Productos.find(p => p.id === id);
  }
  
  function comprarProducto() {
    mostrarInventario();
    
    const idElegido = parseInt(prompt("Ingrese el ID del producto que desea comprar:"));
    const productoElegido = buscarProducto(idElegido);
    
    if (!productoElegido) {
      console.log("Error: Producto no encontrado");
      return;
    }

    productoElegido.stock--;
    
    console.log(`\n Compra realizada: ${productoElegido.nombre}`);
    console.log(` Nuevo stock: ${productoElegido.stock}`);
    
    mostrarInventario();
  }
  
  comprarProducto();