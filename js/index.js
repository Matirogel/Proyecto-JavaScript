import { pintarCarrito, pintarBebidas, carrito, bebidasEnCarrito, calcularTotal } from "./codigo.js";


document.addEventListener('DOMContentLoaded', () => {

    pintarBebidas();

    if (localStorage.getItem('carrito')) {
        pintarCarrito(carrito);
        calcularTotal();
    } 
})
