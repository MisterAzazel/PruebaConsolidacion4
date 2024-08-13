function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

class Carrito {
    constructor() {
        this.productos = []; // Arreglo para almacenar los productos seleccionados
    }

    agregarProducto(producto, cantidad) {
        this.productos.push({ producto, cantidad });
    }

    calcularTotal() {
        return this.productos.reduce((total, item) => total + item.producto.precio * item.cantidad, 0);
    }

    mostrarDetalles() {
        let detalles = 'Detalles de la compra:\n';
        this.productos.forEach(item => {
            detalles += `${item.cantidad} x ${item.producto.nombre} = ${item.producto.precio * item.cantidad}\n`;
        });
        detalles += `Total: ${this.calcularTotal()}`;
        alert(detalles);
    }

    finalizarCompra() {
        alert('Compra finalizada. Gracias por su compra!');
        this.productos = []; // Vaciar el carrito después de finalizar la compra
    }
}

function seleccionarProducto() {
    let seleccion = prompt(`Seleccione un producto:\n1. Zelda Tears of the Kingdom - 50000\n2. Zelda1 - 50000\n3. Zelda2 - 50000\n4. Zelda3 - 50000\n5. Zelda4 - 50000\n6. Zelda5 - 50000`);

    while (isNaN(seleccion) || seleccion < 1 || seleccion > 6) {
        seleccion = prompt(`Selección inválida. Por favor, seleccione un número entre 1 y 6: \n1. Zelda Tears of the Kingdom - 50000\n2. Zelda1 - 50000\n3. Zelda2 - 50000\n4. Zelda3 - 50000\n5. Zelda4 - 50000\n6. Zelda5 - 50000`);
    }
    return seleccion;
}

function solicitarCantidad() {
    let cantidad = prompt("Ingrese la cantidad de unidades:");
    while (isNaN(cantidad) || cantidad < 1) {
        cantidad = prompt("Cantidad inválida. Ingrese un número positivo:");
    }
    return cantidad;
}

function agregarProductosAlCarrito(carrito) {
    let seguir = true;
    const productosDisponibles = [
        new Producto("Zelda Tears of the Kingdom", 50000),
        new Producto("Zelda1", 50000),
        new Producto("Zelda2", 50000),
        new Producto("Zelda3", 50000),
        new Producto("Zelda4", 50000),
        new Producto("Zelda5", 50000)
    ];

    while (seguir) {
        const seleccion = seleccionarProducto();
        const cantidad = solicitarCantidad();
        carrito.agregarProducto(productosDisponibles[seleccion - 1], cantidad);

        seguir = confirm("¿Desea agregar otro producto?");
    }
}

function iniciarCompra() {
    const miCarrito = new Carrito();
    agregarProductosAlCarrito(miCarrito);
    miCarrito.mostrarDetalles();
    miCarrito.finalizarCompra();
}

iniciarCompra();