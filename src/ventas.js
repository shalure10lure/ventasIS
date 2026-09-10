class Ventas {
    calcularPrecioNeto(cantidad, precio) {
        let resultado;
        if (precio === "" && cantidad === "") {
            resultado = "Datos obligatorio";
        } else if (precio === "") {
            resultado = "Precio obligatorio";
        } else if (cantidad === "") {
            resultado = "Cantidad obligatoria";
        } else if (cantidad <= 0) {
            resultado = "La cantidad debe ser mayor a 0";
        } else if (precio <= 0) {
            resultado = "Precio Invalido";
        } else {
            resultado = cantidad * precio;
        }
        return resultado;
    }

    calcularDescuento(precioNeto){
        let descuento;
        if (precioNeto >= 30000) {
            descuento = "15%";
        } else if (precioNeto >= 10000) {
            descuento = "10%";
        } else if (precioNeto >= 7000) {
            descuento = "7%";
        } else if (precioNeto >= 3000) {
            descuento = "5%";
        } else if (precioNeto >= 1000) {
            descuento = "3%";
        } else {
            descuento = "0%";
        }

        return descuento;
    }

    calcularPrecioDespuesDescuento(precioNeto, descuento){
        let porcentajeDescuento = parseFloat(descuento) / 100;
        let descuentoCalculado = precioNeto * porcentajeDescuento;
        let resultado = precioNeto - descuentoCalculado;

        return resultado;
    }

    seleccionarEstado(estado) {
        let resultado;

        if (estado === "CA") {
            resultado = "California";
        } else if (estado === "UT") {
            resultado = "Utah";
        } else if (estado === "NV") {
            resultado = "Nevada";
        } else if (estado === "TX") {
            resultado = "Texas";
        } else if (estado === "AL") {
            resultado = "Alabama";
        } else {
            resultado = "Estado no encontrado";
        }

        return resultado;
    }
    calcularImpuestoEstado(estado) {
        let impuesto;

        if (estado === "CA") {
            impuesto = "8.25%";
        } else if (estado === "UT") {
            impuesto = "6.65%";
        } else if (estado === "NV") {
            impuesto = "8.00%";
        } else if (estado === "TX") {
            impuesto = "6.25%";
        } else if (estado === "AL") {
            impuesto = "4.00%";
        } else {
            impuesto = "0%";
        }

        return impuesto;
    }
    calcularValorImpuesto(precioNeto, estado) {
        let impuesto = this.calcularImpuestoEstado(estado);
        let porcentajeImpuesto = parseFloat(impuesto) / 100;
        let resultado = precioNeto * porcentajeImpuesto;

        return resultado;
    }

    confirmarCompra(cantidad, precio) {
        if (cantidad && precio) {
            return "Compra confirmada";
        } else {
            return "Compra no confirmada";
        }
    }

    seleccionarCategoria(categoria) {
        if (categoria === "Alimentos") {
            return "Alimentos";
        } else if (categoria === "Bebidas alcoholicas") {
            return "Bebidas alcoholicas";
        } else if(categoria==="Material de escritorio"){
            return "Material de escritorio";
        } else if(categoria==="Muebles"){
            return "Muebles";
        } else if(categoria==="Electronicos"){
            return "Electronicos";
        } else if(categoria==="Vestimenta"){
            return "Vestimenta";
        } else if(categoria==="Varios"){
            return "Varios";
        } else {
            return "Categoria no encontrada";
        }
    }
    calcularImpuestoCategoria(categoria, precioNeto) {
        let impuesto = 0.00;
        if (categoria === "Bebidas alcoholicas") {
            impuesto = 0.07;
        }
        if (categoria === "Material de escritorio") {
            impuesto = 0.00;
        }
        if (categoria === "Muebles") {
            impuesto = 0.03;
        }
        if (categoria === "Electronicos") {
            impuesto = 0.04;
        }
        if (categoria === "Vestimenta") {
            impuesto = 0.02;
        }
        if (categoria === "Varios") {
            impuesto = 0.00;
        }
        return precioNeto * impuesto;
    }

    calcularDescuentoCategoria(categoria, precioNeto) {
        if (categoria === "Alimentos") {
            return precioNeto * 0.02;
        }
        if (categoria === "Bebidas alcoholicas") {
            return precioNeto * 0.00;
        }
        if (categoria === "Material de escritorio") {
            return precioNeto * 0.015;
        }
        if (categoria === "Muebles") {
            return precioNeto * 0.00;
        }
        if (categoria === "Electronicos") {
            return precioNeto * 0.01;
        }
        if (categoria === "Vestimenta") {
            return precioNeto * 0.00;
        }
        if (categoria === "Varios") {
            return precioNeto * 0.00;
        }
        return 0.00;
    }
    validarPesoVolumetrico(peso){
        if (peso <= 0) {
            return "Peso invalido";
        }else if(peso>=0){
            return "Peso valido";
        }
    }
    calcularCostoEnvio(cantidad,peso){
        let pesototal= cantidad * peso;
        if (pesototal >= 0 && pesototal <=10) {
            return 0;
        }
        if (pesototal > 10 && pesototal <= 20) {
            return 3.50;
        }
        if (pesototal > 20 && pesototal <= 40) {
            return 5.00;
        }
        if (pesototal > 40 && pesototal <= 80) {
            return 6.00;
        }
        if (pesototal > 80 && pesototal <= 100) {
            return 6.50;
        }
        if (pesototal > 100 && pesototal <= 200) {
            return 8.00;
        }
        if (pesototal > 200) {
            return 9.00;
        }
        return 0.00;
    }

    seleccionarTipoCliente(tipoCliente) {
        if (tipoCliente === "Normal") {
            return "Normal";
        } else if (tipoCliente === "Recurrente") {
            return "Recurrente";
        } else if (tipoCliente === "Antiguo Recurrente") {
            return "Antiguo Recurrente";
        } else if (tipoCliente === "Especial") {
            return "Especial";
        } else {
            return "Tipo de cliente no encontrado";
        }
    }
    calcularDescuentoCliente(tipoCliente, precioNeto) {
        if (tipoCliente === "Normal") {
            return 0;
        } else if (tipoCliente === "Recurrente") {
            return precioNeto * 0.005;
        } else if (tipoCliente === "Antiguo Recurrente") {
            return precioNeto * 0.01;
        } else if (tipoCliente === "Especial") {
            return precioNeto * 0.015;
        } else {
            return 0;
        }
    }
}

export default Ventas;
