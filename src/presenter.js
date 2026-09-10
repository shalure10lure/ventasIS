import Ventas from "./ventas.js";
const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const estado = document.querySelector("#estado");
const form = document.querySelector("#ventas-form");
const div = document.querySelector("#resultado-div");
const cancelar = document.querySelector("#cancelar-button");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const cantidadIngresada = Number(cantidad.value);
    const precioIngresado = Number(precio.value);
    const estadoIngresado = estado.value;
    const ventas = new Ventas();
    const precioNeto = ventas.calcularPrecioNeto(cantidadIngresada,precioIngresado);

    if (typeof precioNeto === "string") {
        div.innerHTML = "<p>" + precioNeto + "</p>";
    } else {
        const descuento = ventas.calcularDescuento(precioNeto);
        const precioDespuesDescuento =ventas.calcularPrecioDespuesDescuento(precioNeto,descuento);
        const impuesto =ventas.calcularValorImpuesto(precioDespuesDescuento,estadoIngresado);
        const impuestoEstado =ventas.calcularImpuestoEstado(estadoIngresado);
        const precioTotal =precioDespuesDescuento + impuesto;

        div.innerHTML =
            "<p>Precio neto (" +cantidadIngresada +
            " * " +precioIngresado +"): $" +precioNeto +
            "</p>" +
            "<p>Descuento (" +descuento +"): $" +(precioNeto - precioDespuesDescuento).toFixed(2) +
            "</p>" +
            "<p>Impuesto para " +estadoIngresado +
            " (%" +impuestoEstado.replace("%", "") +"): $" +
            impuesto.toFixed(2) +
            "</p>" +
            "<p>Precio total (descuento e impuesto): $" +
            precioTotal.toFixed(2) +
            "</p>";
    }
});

cancelar.addEventListener("click", () => {
    cantidad.value = "";
    precio.value = "";
    estado.value = "CA";
    div.innerHTML = "";
});
