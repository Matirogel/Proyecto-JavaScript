import { carrito } from "./codigo.js";



const enviarCarritoStorage = () => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

const obtenerCarritoStorage = () => {
    let carritoStorage = JSON.parse(localStorage.getItem('carrito'));
    return carritoStorage;
}



export { enviarCarritoStorage, obtenerCarritoStorage }