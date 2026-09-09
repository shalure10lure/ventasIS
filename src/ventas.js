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
        return "0%";
    }
}

export default Ventas;
