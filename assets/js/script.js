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
    let seleccion = prompt(`Seleccione un producto:\n1. Zelda Tears of the Kingdom - 50000\n2. Dragon Ball: Sparking Zero1 - 55000\n3. Kingdom Hearts 2 - 12000\n4. Darksiders 3 - 35000\n5. Monster Hunter: Rise - 40000\n6. Xenoblade Chronicles 3 - 45000`);

    while (isNaN(seleccion) || seleccion < 1 || seleccion > 6) {
        seleccion = prompt(`Selección inválida. Por favor, seleccione un número entre 1 y 6: \n1. Zelda Tears of the Kingdom - 50000\n2. Dragon Ball: Sparking Zero - 55000\n3. Kingdom Hearts 2 - 12000\n4. Darksiders 3 - 35000\n5. Monster Hunter: Rise - 40000\n6. Xenoblade Chronicles 3 - 45000`);
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
        new Producto("Zelda Tears Of The Kingdom", 50000),
        new Producto("Dragon Ball: Sparking Zero", 55000),
        new Producto("Kingdom Hearts 2", 12000),
        new Producto("Darksiders 3", 35000),
        new Producto("Monster Hunter: Rise", 40000),
        new Producto("Xenoblade Chronicles 3", 45000)
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