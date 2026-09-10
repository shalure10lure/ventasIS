import Ventas from "./ventas.js";

const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const estado = document.querySelector("#estado");
const categoria = document.querySelector("#categoria");
const peso = document.querySelector("#peso");
const tipoCliente = document.querySelector("#tipoCliente");

const form = document.querySelector("#ventas-form");
const div = document.querySelector("#resultado-div");
const cancelar = document.querySelector("#cancelar-button");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const cantidadIngresada = Number(cantidad.value);
    const precioIngresado = Number(precio.value);
    const estadoIngresado = estado.value;
    const categoriaIngresada = categoria.value;
    const pesoIngresado = Number(peso.value);
    const tipoClienteIngresado = tipoCliente.value;

    const ventas = new Ventas();

    const resultado = ventas.calcularDetalleCompra(
        cantidadIngresada,
        precioIngresado,
        estadoIngresado,
        categoriaIngresada,
        pesoIngresado,
        tipoClienteIngresado
    );

    if (resultado.error) {
        div.innerHTML = `<p>Error: ${resultado.error}</p>`;
    } else {
        div.innerHTML =
          "<h2>Detalle de la compra</h2>" +
          "<p>Precio neto: $" +
          resultado.precioNeto.toFixed(2) +
          "</p>" +
          "<p>Descuento general (" +
          resultado.descuentoGeneral +
          "): $" +
          resultado.valorDescuentoGeneral.toFixed(2) +
          "</p>" +
          "<p>Descuento por categoría: $" +
          resultado.descuentoCategoria.toFixed(2) +
          "</p>" +
          "<p>Descuento fijo del cliente: $" +
          resultado.descuentoFijo.toFixed(2) +
          "</p>" +
          "<p>Impuesto del estado: $" +
          resultado.impuestoEstado.toFixed(2) +
          "</p>" +
          "<p>Impuesto por categoría: $" +
          resultado.impuestoCategoria.toFixed(2) +
          "</p>" +
          "<p>Costo de envío: $" +
          resultado.costoEnvio.toFixed(2) +
          "</p>" +
          "<p>Descuento de envío del cliente: $" +
          resultado.descuentoEnvio.toFixed(2) +
          "</p>" +
          "<p>Envío final: $" +
          resultado.envioFinal.toFixed(2) +
          "</p>" +
          "<h2>Total final: $" +
          resultado.total.toFixed(2) +
          "</h2>";
    }
});

cancelar.addEventListener("click", () => {
    cantidad.value = "";
    precio.value = "";
    estado.value = "CA";
    div.innerHTML = "";
});
