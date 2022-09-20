// TIENDA DE BEBIDAS            
const d = document;

let carrito = [];

const pedirBebida = () => {

    let listaDeBebidas = bebidas.map((bebida) =>  bebida.nombre + "   $" + bebida.precio);
    alert("Lista de productos:\n\n" + listaDeBebidas.join("\n"));        

    let bebida = prompt('Ingrese el nombre del producto a comprar:\n 1. Fernet\n 2. Gancia\n 3. Gin\n 4. Licor\n 5. Whisky\n 6. Salir').toLowerCase();

    while (!( bebida == "fernet" || bebida == "gancia" || bebida == "gin"
           || bebida == "licor" || bebida == "whisky" || bebida == "salir")) {
        alert('¡ERROR! Escoge un producto de la lista')
        bebida = prompt('Ingrese el nombre del producto a comprar:\n 1. Fernet\n 2. Gancia\n 3. Gin\n 4. Licor\n 5. Whisky\n 6. Salir').toLowerCase();
    }

    return bebida;
}

const pedirCantidad = () => {

    let cantidad = Number(prompt('Ingrese la cantidad del producto escogido:'));

    while (isNaN(cantidad) || (cantidad == "")) {
        alert('¡ERROR! Escoge un número');
        cantidad = Number(prompt('Ingrese la cantidad del producto escogido:'));
    }

    return cantidad;
}

const comprarBebidas = () => {

    let total = 0;
    let continuarCompra = false;

    do {
        let precio;
        let cantidad;
        let bebida = pedirBebida();
        
        switch (bebida) {
            case "fernet":
                cantidad = pedirCantidad();
                precio = bebidas[0].precio;
                carrito.push( {bebida, cantidad, precio});
                break;
            case "gancia":
                cantidad = pedirCantidad();
                precio = bebidas[1].precio;
                carrito.push( {bebida, cantidad, precio});
                break;
            case "gin":
                cantidad = pedirCantidad();
                precio = bebidas[2].precio;
                carrito.push( {bebida, cantidad, precio});
                break;
            case "licor":
                cantidad = pedirCantidad();
                precio = bebidas[3].precio;
                carrito.push( {bebida, cantidad, precio});
                break;
            case "whisky":
                cantidad = pedirCantidad();
                precio = bebidas[4].precio;
                carrito.push( {bebida, cantidad, precio});
                break;
            case "salir":
                subtotal = 0;
                break;
        }
        console.log(carrito);    
        continuarCompra = confirm('¿Desea seguir comprando productos?')
        
    } while (continuarCompra);

    alert(`Compra finalizada!`);

    return total = carrito.reduce((acumulador, productosCarrito) => acumulador + (productosCarrito.precio * productosCarrito.cantidad), 0)

}


const precioEnvio = (total) => {

    if (total >= 6000) {
        let envioPrecio = confirm('¡Tienes envio gratis! ¿Quieres hacer uso del mismo?');
        if (envioPrecio) {
            alert('¡Gracias por su compra!');
        } else {
            alert('¡Gracias por su compra!\nPuedes retirarlo por la sucursal entre las 10:00 y las 20:00');
        }
    } else if (total == 0) {
        alert('Gracias por su visita');
    } else {
        let envioPrecio = confirm('¡El costo de envío es de $500! ¿Quieres hacer uso del mismo?');
        if (envioPrecio) {
            total = total + 500;
            alert('¡Gracias por su compra!');
        } else {
            alert('¡Gracias por su compra!\nPuedes retirarlo por la sucursal entre las 10:00 y las 20:00');
        }
    }
    return total;
}


const finalizarCompra = (total) => {

    if (total != 0) {
        alert(`El total de su compra es de: $${total}`);
    } else {
        alert('¡Nos vemos!');
    }

    return total
}


const iniciarApp = () => {

    const button = d.querySelector('.btn-danger');
    button.addEventListener('click', () => {
        renderizarCarrito(finalizarCompra(precioEnvio(comprarBebidas())));
        ;
    })
}

const renderizarCarrito = (totalImp) => {

    const carritoImpreso = d.querySelector('#carrito');
    carritoImpreso.innerHTML = `<h2 class="text-center m-3 background-Grey">¡Productos comprados!</h2>`;

    let container = d.createElement('div');
    container.classList.add('conjuntoProductos','background-fullGrey');
    carritoImpreso.appendChild(container);

    carrito.forEach((producto) => {

        let div = d.createElement('div');
        div.classList.add('background-Grey');

        div.innerHTML = `
            <ul class="productoCarrito">
                <li class="textWhite background-Grey">Producto: ${producto.bebida}</li>
                <li class="textWhite background-Grey">Precio por unidad: $${producto.precio}</li>
                <li class="textWhite background-Grey">Cantidad: ${producto.cantidad}</li>
            </ul>`;

        container.appendChild(div);
    });

    let div = d.createElement('div');
    div.classList.add('totalCarrito');
    div.innerHTML = `<p class="background-fullGrey ps-4 pt-3">Total: $${totalImp}</p>`;

    carritoImpreso.appendChild(div);
}

iniciarApp();