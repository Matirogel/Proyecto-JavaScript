import { pintarCarrito, pintarBebidas, carrito } from "./codigo.js";


document.addEventListener('DOMContentLoaded', () => {

    pintarBebidas();

    if (localStorage.getItem('carrito')) {
        pintarCarrito(carrito);
    }
})
