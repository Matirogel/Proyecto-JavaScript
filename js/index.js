import { pintarCarrito, pintarBebidas, carrito, bebidasEnCarrito, calcularTotal } from "./codigo.js";


document.addEventListener('DOMContentLoaded', async () => {
    
    const BBDD = await obtenerBBDD();
    pintarBebidas(BBDD);

    if (localStorage.getItem('carrito')) {
        pintarCarrito(carrito);
    } 
})


const obtenerBBDD = async () => {
    try {
        const response = await fetch('./json/stock.json');
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}