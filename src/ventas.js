class Ventas {
    calcularPrecioNeto(cantidad, precio) {
        if(precio === ""&&cantidad === "") {
            return "Datos obligatorio";
        }
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
    calcularDescuento(precioNeto){
        if(precioNeto >= 1000 && precioNeto <= 2999){
            return "3%";
        }
        if(precioNeto >= 3000 && precioNeto <= 6999){
            return "5%";
        }
        if(precioNeto >= 7000 && precioNeto <= 9999){
            return "7%";
        }
        if(precioNeto >= 10000 && precioNeto <= 29999){
            return "10%";
        }
        if(precioNeto >= 30000 && precioNeto <= 99999){
            return "15%";
        }
        return "0%";
    }

    calcularPrecioDespuesDescuento(precioNeto, descuento){
        let porcentajeDescuento = parseFloat(descuento) / 100;
        let descuentoCalculado = precioNeto * porcentajeDescuento;
        return precioNeto - descuentoCalculado;
    }

    seleccionarEstado(estado) {
        if (estado === "CA") {
            return "California";
        }
        if (estado === "UT") {
            return "Utah";
        }
        if (estado === "UT") {
            return "Utah";
        }
        if (estado === "NV") {
            return "Nevada";
        }
        if (estado === "TX") {
            return "Texas";
        }
        if (estado === "AL") {
            return "Alabama";
        }
        return "Estado no encontrado";
    }
    calcularImpuestoEstado(estado) {
        if (estado === "CA") {
            return "8.25%";
        }
        if (estado === "UT") {
            return "6.65%";
        }
        if (estado === "NV") {
            return "8.00%";
        }
        if (estado === "TX") {
            return "6.25%";
        }
        if (estado === "AL") {
            return "4.00%";
        }
        return "0%";
    }
    calcularValorImpuesto(precioNeto, estado) {
        let impuesto = this.calcularImpuestoEstado(estado);
        let porcentajeImpuesto = parseFloat(impuesto) / 100;
        return precioNeto * porcentajeImpuesto;
    }
}

export default Ventas;
