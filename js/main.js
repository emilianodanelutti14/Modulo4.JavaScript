
const productosPeluqueria = ["Shampoo Keratina", "Acondicionador Brillo", "Tintura 7.1", "Crema de Peinar", "Tintura 6.1"];
console.log("Inventario Inicial:", productosPeluqueria);

productosPeluqueria.push("Fijador Extra Fuerte"); 

productosPeluqueria.unshift("Tratamiento Anticaída"); 

console.log("Inventario tras reponer stock:", productosPeluqueria);

console.log("Producto a modificar:", productosPeluqueria[3]); 

productosPeluqueria[3] = "Tintura 8.1 (Rubio Claro)"; 
console.log("Inventario corregido:", productosPeluqueria);


let productoBuscar = prompt("Ingrese el nombre del producto de peluquería que desea buscar:");

if (productosPeluqueria.includes(productoBuscar)) {
    let indiceEncontrado = productosPeluqueria.indexOf(productoBuscar);
    alert(`¡Éxito! El producto '${productoBuscar}' existe y está en el índice: ${indiceEncontrado}`);
    console.log(`Búsqueda: '${productoBuscar}' encontrado en índice ${indiceEncontrado}`);
} else {
    alert(`El producto '${productoBuscar}' no se encuentra en el inventario.`);
    console.log(`Búsqueda: '${productoBuscar}' no existe en el array.`);
}
let indiceModificar = parseInt(prompt("Ingrese el número de índice que desea cambiar (0 a " + (productosPeluqueria.length - 1) + "):"));


if (!isNaN(indiceModificar) && indiceModificar >= 0 && indiceModificar < productosPeluqueria.length) {
    
    
    let nuevoProducto = prompt(`El producto actual en el índice ${indiceModificar} es '${productosPeluqueria[indiceModificar]}'. Ingrese el nuevo nombre:`);
    
    productosPeluqueria.splice(indiceModificar, 1, nuevoProducto);
    
    alert("¡Inventario actualizado con éxito!");
    console.log(productosPeluqueria);

} else {
    alert("Índice no válido. No se realizaron cambios.");
}
function reportarInventario(productosProductos) {
console.log("LISTA DE STOCK DISPONIBLE EN SALÓN");
for (const producto of productosPeluqueria) {
    console.log(`Producto: ${producto}`);
 }
}
reportarInventario(productosPeluqueria);