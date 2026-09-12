
class Socio {
    
    constructor(nombre, edad, categoria, cuotaBase) {
        this.nombre = nombre;
        this.edad = parseInt(edad);
        this.categoria = categoria; // Ej: "Pase Libre", "Musculación", "Crossfit"
        this.cuotaBase = parseFloat(cuotaBase);
    }
    
    //Aplica un recargo del 10% por pago fuera de término
    calcularCuotaConRecargo() {
        const recargo = this.cuotaBase * 0.10;
        this.cuotaBase += recargo;
        return this.cuotaBase;
    }

    //Cambia la categoría del socio
    actualizarCategoria(nuevaCategoria) {
        this.categoria = nuevaCategoria;
    }
}
const socio1 = new Socio("Gonzalo Pérez", 28, "Musculación", 15000);
const socio2 = new Socio("Martina Gómez", 34, "Pase Libre", 22000);
const socio3 = new Socio("Ariel Rodríguez", 19, "Crossfit", 18000);

const padronSocios = [socio1, socio2, socio3];

console.log("--- ESTADO INICIAL DE LOS SOCIOS ---");
console.log(socio1);
console.log(socio2);
console.log(socio3);

console.log("\n--- EJECUTANDO MÉTODOS Y MODIFICANDO PROPIEDADES ---");

// recargo para el socio1 (Modifica cuotaBase)
socio1.calcularCuotaConRecargo();
console.log(`Se aplicó recargo a ${socio1.nombre}. Nueva cuota: $${socio1.cuotaBase}`);

// Actualizamos la categoría de la socio2 (Modifica categoria)
socio2.actualizarCategoria("VIP Premium");
console.log(`✨ ${socio2.nombre} cambió su categoría a: ${socio2.categoria}`);


console.log("\n--- REPORTE FINAL  ---");

for (const socio of padronSocios) {
    console.log(`Socio: ${socio.nombre} | Categoría: ${socio.categoria} | Cuota Actual: $${socio.cuotaBase}`);
}