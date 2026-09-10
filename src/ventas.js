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
        let resultado;
        if (cantidad && precio) {
            resultado = "Compra confirmada";
        } else {
            resultado = "Compra no confirmada";
        }
        return resultado;
    }

    seleccionarCategoria(categoria) {
        let resultado;
        if (categoria === "Alimentos") {
            resultado = "Alimentos";
        } else if (categoria === "Bebidas alcoholicas") {
            resultado = "Bebidas alcoholicas";
        } else if (categoria === "Material de escritorio") {
            resultado = "Material de escritorio";
        } else if (categoria === "Muebles") {
            resultado = "Muebles";
        } else if (categoria === "Electronicos") {
            resultado = "Electronicos";
        } else if (categoria === "Vestimenta") {
            resultado = "Vestimenta";
        } else if (categoria === "Varios") {
            resultado = "Varios";
        } else {
            resultado = "Categoria no encontrada";
        }
        return resultado;
    }
    
    calcularImpuestoCategoria(categoria, precioNeto) {
        let porcentajeImpuesto;
        if (categoria === "Bebidas alcoholicas") {
            porcentajeImpuesto = 0.07;
        } else if (categoria === "Muebles") {
            porcentajeImpuesto = 0.03;
        } else if (categoria === "Electronicos") {
            porcentajeImpuesto = 0.04;
        } else if (categoria === "Vestimenta") {
            porcentajeImpuesto = 0.02;
        } else {
            porcentajeImpuesto = 0;
        }
        const impuesto = precioNeto * porcentajeImpuesto;
        return impuesto;
    }

    calcularDescuentoCategoria(categoria, precioNeto) {
        let porcentajeDescuento;
        if (categoria === "Alimentos") {
            porcentajeDescuento = 0.02;
        } else if (categoria === "Material de escritorio") {
            porcentajeDescuento = 0.015;
        } else if (categoria === "Electronicos") {
            porcentajeDescuento = 0.01;
        } else {
            porcentajeDescuento = 0;
        }
        const descuento = precioNeto * porcentajeDescuento;
        return descuento;
    }

    validarPesoVolumetrico(peso) {
        let resultado;
        if (peso <= 0) {
            resultado = "Peso invalido";
        } else {
            resultado = "Peso valido";
        }
        return resultado;
    }

    calcularCostoEnvio(cantidad, peso) {
        const pesoTotal = cantidad * peso;
        let resultado;
        if (pesoTotal >= 0 && pesoTotal <= 10) {
            resultado = 0;
        } else if (pesoTotal <= 20) {
            resultado = 3.50;
        } else if (pesoTotal <= 40) {
            resultado = 5.00;
        } else if (pesoTotal <= 80) {
            resultado = 6.00;
        } else if (pesoTotal <= 100) {
            resultado = 6.50;
        } else if (pesoTotal <= 200) {
            resultado = 8.00;
        } else {
            resultado = 9.00;
        }
        return resultado;
    }

    seleccionarTipoCliente(tipoCliente) {
        let resultado;
        if (tipoCliente === "Normal") {
            resultado = "Normal";
        } else if (tipoCliente === "Recurrente") {
            resultado = "Recurrente";
        } else if (tipoCliente === "Antiguo Recurrente") {
            resultado = "Antiguo Recurrente";
        } else if (tipoCliente === "Especial") {
            resultado = "Especial";
        } else {
            resultado = "Tipo de cliente no encontrado";
        }
        return resultado;
    }

    calcularDescuentoCliente(tipoCliente, costoEnvio) {
        let porcentajeDescuento;
        if (tipoCliente === "Recurrente") {
            porcentajeDescuento = 0.005;
        } else if (tipoCliente === "Antiguo Recurrente") {
            porcentajeDescuento = 0.01;
        } else if (tipoCliente === "Especial") {
            porcentajeDescuento = 0.015;
        } else {
            porcentajeDescuento = 0;
        }
        const descuento = costoEnvio * porcentajeDescuento;
        return descuento;
    }

    calcularDescuentoFijo(tipoCliente, categoria, precioNeto) {
        let descuento;
        if (
            tipoCliente === "Recurrente" &&
            categoria === "Alimentos" &&
            precioNeto > 3000
        ) {
            descuento = 100;
        } else if (
            tipoCliente === "Especial" &&
            categoria === "Electronicos" &&
            precioNeto > 7000
        ) {
            descuento = 200;
        } else {
            descuento = 0;
        }
        return descuento;
    }
    calcularDetalleCompra(cantidad, precio, estado, categoria, peso, tipoCliente) {
        const precioNeto = this.calcularPrecioNeto(cantidad, precio);
        let resultado;
        if (typeof precioNeto === "string") {
           resultado = {
               error: precioNeto
           };
        } else {
          const descuentoGeneral = this.calcularDescuento(precioNeto);
          const precioDespuesDescuento =this.calcularPrecioDespuesDescuento(precioNeto,descuentoGeneral);
          const valorDescuentoGeneral =precioNeto - precioDespuesDescuento;
          const descuentoCategoria =this.calcularDescuentoCategoria(categoria,precioNeto);
          const descuentoFijo =this.calcularDescuentoFijo(tipoCliente,categoria,precioNeto);
          const precioConDescuentos =precioDespuesDescuento -descuentoCategoria -descuentoFijo;
          const impuestoEstado =this.calcularValorImpuesto(precioConDescuentos,estado);
          const impuestoCategoria =this.calcularImpuestoCategoria(categoria,precioConDescuentos);
          const costoEnvio =this.calcularCostoEnvio(cantidad,peso);
          const descuentoEnvio =this.calcularDescuentoCliente(tipoCliente,costoEnvio);
          const envioFinal =costoEnvio - descuentoEnvio;
          const total =precioConDescuentos +impuestoEstado +impuestoCategoria +envioFinal;

          resultado = {
            precioNeto: precioNeto,
            descuentoGeneral: descuentoGeneral,
            valorDescuentoGeneral: valorDescuentoGeneral,
            descuentoCategoria: descuentoCategoria,
            descuentoFijo: descuentoFijo,
            precioConDescuentos: precioConDescuentos,
            impuestoEstado: impuestoEstado,
            impuestoCategoria: impuestoCategoria,
            costoEnvio: costoEnvio,
            descuentoEnvio: descuentoEnvio,
            envioFinal: envioFinal,
            total: total
          };
        }
        return resultado;
    }
}

export default Ventas;
