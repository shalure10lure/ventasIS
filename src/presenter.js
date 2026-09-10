import Ventas from "./ventas.js";
const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const estado = document.querySelector("#estado");
const form = document.querySelector("#ventas-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const cantidadIngresada = Number(cantidad.value);
    const precioIngresado = Number(precio.value);
    const estadoIngresado = estado.value.toUpperCase();

    const ventas = new Ventas();

    const precioNeto = ventas.calcularPrecioNeto(
        cantidadIngresada,
        precioIngresado
    );

    div.innerHTML = "<p>Precio neto: $" + precioNeto + "</p>";
});
