class Ventas {
    calcularPrecioNeto(cantidad, precio) {
        if (cantidad <= 0) {
            return "La cantidad debe ser mayor a 0";
        }
        return cantidad * precio;
    }
}

export default Ventas;
