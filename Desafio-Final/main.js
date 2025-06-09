document.addEventListener('DOMContentLoaded', () => {
const baseDeDatos = [
    {
        id: 1,
        nombre: 'Zapatillas Runner Pro',
        precio: 89.99, 
        imagen: 'images/zapatilla1.jpg'
    },
    {
        id: 2,
        nombre: 'Clásicas Urbanas',
        precio: 65.50,
        imagen: 'images/zapatilla2.jpg'
    },
    {
        id: 3,
        nombre: 'Montaña X-Treme',
        precio: 120.00,
        imagen: 'images/zapatilla3.jpg'
    },
    {
        id: 4,
        nombre: 'Estilo Casual',
        precio: 55.00,
        imagen: 'images/zapatilla4.jpg'
    },
    {
        id: 5,
        nombre: 'Botines de Cuero',
        precio: 150.75,
        imagen: 'images/zapatilla5.jpg'
    },
    {
        id: 6,
        nombre: 'Zapatillas de Lona',
        precio: 45.99,
        imagen: 'images/zapatilla6.jpg'
    }
];

    let carrito = [];
    const divisa = '$';


    const contenedorProductos = document.querySelector('#contenedor-productos');
    const carritoItems = document.querySelector('#carrito-items');
    const carritoTotalPrecio = document.querySelector('#carrito-total-precio');
    const contadorCarrito = document.querySelector('#contador-carrito');
    const botonVaciar = document.querySelector('#vaciar-carrito');
    const botonProcesarPedido = document.querySelector('#procesar-pedido');
    const botonCarrito = document.querySelector('#boton-carrito');
    const carritoModal = document.querySelector('#carrito-modal');
    const cerrarCarrito = document.querySelector('#cerrar-carrito');

    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
            const productoNode = document.createElement('div');
            productoNode.classList.add('producto');
            productoNode.innerHTML = `
                <img src="${info.imagen}" alt="${info.nombre}" class="producto-imagen">
                <div class="producto-info">
                    <h3 class="producto-nombre">${info.nombre}</h3>
                    <p class="producto-precio">${divisa}${info.precio.toFixed(2)}</p>
                    <button class="btn btn-primary agregar-carrito" data-id="${info.id}">Añadir al Carrito</button>
                </div>
            `;
            contenedorProductos.appendChild(productoNode);
        });
    }
    function anyadirProductoAlCarrito(evento) {
        const idProducto = evento.target.dataset.id;
        const itemExistente = carrito.find((item) => item.id === parseInt(idProducto));

        if (itemExistente) {
            itemExistente.cantidad++;
        } else {

            const producto = baseDeDatos.find((item) => item.id === parseInt(idProducto));
            carrito.push({
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                imagen: producto.imagen,
                cantidad: 1
            });
        }
        
        renderizarCarrito();
    }


    function renderizarCarrito() {

        carritoItems.innerHTML = '';

        carrito.forEach((item) => {
            const itemNode = document.createElement('div');
            itemNode.classList.add('carrito-item');
            itemNode.innerHTML = `
                <img src="${item.imagen}" alt="${item.nombre}">
                <div class="carrito-item-info">
                    <span class="carrito-item-nombre">${item.nombre}</span>
                    <span class="carrito-item-precio">${divisa}${item.precio.toFixed(2)}</span>
                    <span class="carrito-item-cantidad">Cantidad: ${item.cantidad}</span>
                </div>
                <button class="carrito-item-eliminar" data-id="${item.id}">×</button>
            `;
            carritoItems.appendChild(itemNode);
        });


        actualizarTotalYContador();
        guardarCarritoEnLocalStorage();
    }
    
    function eliminarItemCarrito(evento) {
        const idProducto = evento.target.dataset.id;
        carrito = carrito.filter((item) => item.id !== parseInt(idProducto));
        renderizarCarrito();
    }


    function vaciarCarrito() {
        carrito = [];
        renderizarCarrito();
    }


    function actualizarTotalYContador() {

        const total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
        carritoTotalPrecio.textContent = total.toFixed(2);

        const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
        contadorCarrito.textContent = totalItems;
    }
    

    function guardarCarritoEnLocalStorage() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }


    function cargarCarritoDeLocalStorage() {
        if (localStorage.getItem('carrito') !== null) {
            carrito = JSON.parse(localStorage.getItem('carrito'));
            renderizarCarrito();
        }
    }


    function procesarPedido() {
        if (carrito.length === 0) {
            alert('El carrito está vacío. Añade productos antes de procesar el pedido.');
            return;
        }
        
        alert('Gracias por tu compra. Tu pedido se ha procesado correctamente.');
        vaciarCarrito();
        carritoModal.classList.remove('abierto');
    }

    contenedorProductos.addEventListener('click', (evento) => {
        if (evento.target.classList.contains('agregar-carrito')) {
            anyadirProductoAlCarrito(evento);
        }
    });


    carritoItems.addEventListener('click', (evento) => {
        if (evento.target.classList.contains('carrito-item-eliminar')) {
            eliminarItemCarrito(evento);
        }
    });
    

    botonVaciar.addEventListener('click', vaciarCarrito);


    botonProcesarPedido.addEventListener('click', procesarPedido);


    botonCarrito.addEventListener('click', () => {
        carritoModal.classList.add('abierto');
    });

    cerrarCarrito.addEventListener('click', () => {
        carritoModal.classList.remove('abierto');
    });


    cargarCarritoDeLocalStorage();
    renderizarProductos();
});