class Ventas {
    calcularPrecioNeto(cantidad, precio) {
        if (precio === "") {
            return "Precio obligatorio";
        }
        if (cantidad === "") {
            return "Cantidad obligatoria";
        }
        if (cantidad <= 0) {
            return "La cantidad debe ser mayor a 0";
        }
        if (precio <= 0) {
            return "Precio Invalido";
        }
        return cantidad * precio;
    }
}

export default Ventas;
