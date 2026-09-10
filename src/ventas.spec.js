import Ventas from "./ventas.js";

describe("Ventas", () => {
    it("deberia calcular el precio neto cuando se ingresan cantidad 2 y precio 500", () => {
        let ventas = new Ventas();
        ventas.cantidad = 2;
        ventas.precio = 500;
        expect(ventas.calcularPrecioNeto(ventas.cantidad, ventas.precio)).toEqual(1000);
    });
    it("deberia calcular el precio neto cuando se ingresan cantidad 1 y precio 250", () => {
        let ventas = new Ventas();
        ventas.cantidad = 1;
        ventas.precio = 250;
        expect(ventas.calcularPrecioNeto(ventas.cantidad, ventas.precio)).toEqual(250);
    });
    it("deberia calcular el precio neto cuando se ingresan cantidad 3 y precio 25.50", () => {
        let ventas = new Ventas();
        ventas.cantidad = 3;
        ventas.precio = 25.50;
        expect(ventas.calcularPrecioNeto(ventas.cantidad, ventas.precio)).toEqual(76.50);
    });

    it("deberia validar la cantidad mayor a 0", () => {
        let ventas = new Ventas();
        ventas.cantidad = 0;
        ventas.precio = 500;
        expect(ventas.calcularPrecioNeto(ventas.cantidad, ventas.precio)).toEqual("La cantidad debe ser mayor a 0");
    });
    it("deberia si la cantiddad es negativa validar la cantidad mayor a 0", () => {
        let ventas = new Ventas();
        ventas.cantidad = -2;
        ventas.precio = 500;
        expect(ventas.calcularPrecioNeto(ventas.cantidad, ventas.precio)).toEqual("La cantidad debe ser mayor a 0");
    });

    it("deberia si el precio es 0, validar precio invalido", () => {
        let ventas = new Ventas();
        ventas.cantidad = 2;
        ventas.precio = 0;
        expect(ventas.calcularPrecioNeto(ventas.cantidad, ventas.precio)).toEqual("Precio Invalido");
    });

    it("deberia validar si el precio es negativo, validar precio invalido", () => {
        let ventas = new Ventas();
        ventas.cantidad = 2;
        ventas.precio = -50;
        expect(ventas.calcularPrecioNeto(ventas.cantidad, ventas.precio)).toEqual("Precio Invalido");
    });

    it("deberia validar si la cantidad esta vacio, validar cantidada obligatoria", () => {
        let ventas = new Ventas();
        ventas.cantidad = "";
        ventas.precio = 500;
        expect(ventas.calcularPrecioNeto(ventas.cantidad, ventas.precio)).toEqual("Cantidad obligatoria");
    });
    it("deberia validar si el precio esta vacio, validar precio obligatorio", () => {
        let ventas = new Ventas();
        ventas.cantidad = 2;
        ventas.precio = "";
        expect(ventas.calcularPrecioNeto(ventas.cantidad, ventas.precio)).toEqual("Precio obligatorio");
    });
    it("deberia validar si la cantidad y el precio estan vacios, validar datos obligatorio", () => {
        let ventas = new Ventas();
        ventas.cantidad = "";
        ventas.precio = "";
        expect(ventas.calcularPrecioNeto(ventas.cantidad, ventas.precio)).toEqual("Datos obligatorio");
    });

    it("deberia aplicar 0% de descuento cuando el precio neto es 500", () => {
        let ventas = new Ventas();
        expect(ventas.calcularDescuento(500)).toEqual("0%");
    });
    it("deberia aplicar 3% de descuento cuando el precio neto es 1000", () => {
        let ventas = new Ventas();
        expect(ventas.calcularDescuento(1000)).toEqual("3%");
    });
    it("deberia aplicar 3% de descuento cuando el precio neto es 2999", () => {
        let ventas = new Ventas();
        expect(ventas.calcularDescuento(2999)).toEqual("3%");
    });
    it("deberia aplicar 5% de descuento cuando el precio neto es 3000", () => {
        let ventas = new Ventas();
        expect(ventas.calcularDescuento(3000)).toEqual("5%");
    });
    it("deberia aplicar 5% de descuento cuando el precio neto es 6999", () => {
        let ventas = new Ventas();
        expect(ventas.calcularDescuento(6999)).toEqual("5%");
    });
    it("deberia aplicar 7% de descuento cuando el precio neto es 7000", () => {
        let ventas = new Ventas();
        expect(ventas.calcularDescuento(7000)).toEqual("7%");
    });
    it("deberia aplicar 7% de descuento cuando el precio neto es 9999", () => {
        let ventas = new Ventas();
        expect(ventas.calcularDescuento(9999)).toEqual("7%");
    });
    it("deberia aplicar 10% de descuento cuando el precio neto es 10000", () => {
        let ventas = new Ventas();
        expect(ventas.calcularDescuento(10000)).toEqual("10%");
    });
    it("deberia aplicar 10% de descuento cuando el precio neto es 29999", () => {
        let ventas = new Ventas();
        expect(ventas.calcularDescuento(29999)).toEqual("10%");
    });
    it("deberia aplicar 15% de descuento cuando el precio neto es 30000", () => {
        let ventas = new Ventas();
        expect(ventas.calcularDescuento(30000)).toEqual("15%");
    });
    it("deberia aplicar 15% de descuento cuando el precio neto es 50000", () => {
        let ventas = new Ventas();
        expect(ventas.calcularDescuento(50000)).toEqual("15%");
    });

    it("deberia calcular el precio despues del descuento de 3% para un precio neto de 1000", () => {
       let ventas = new Ventas();
       expect(ventas.calcularPrecioDespuesDescuento(1000, 3)).toEqual(970);
    });
    it("deberia calcular el precio despues del descuento de 5% para un precio neto de 3000", () => {
       let ventas = new Ventas();
       expect(ventas.calcularPrecioDespuesDescuento(3000, 5)).toEqual(2850);
    });
    it("deberia calcular el precio despues del descuento de 7% para un precio neto de 7000", () => {
       let ventas = new Ventas();
       expect(ventas.calcularPrecioDespuesDescuento(7000, 7)).toEqual(6510);
    });
    it("deberia calcular el precio despues del descuento de 10% para un precio neto de 10000", () => {
       let ventas = new Ventas();
       expect(ventas.calcularPrecioDespuesDescuento(10000, 10)).toEqual(9000);
    });
    it("deberia seleccionar California cuando se ingresa CA", () => {
       let ventas = new Ventas();
       expect(ventas.seleccionarEstado("CA")).toEqual("California");
    });
    it("deberia seleccionar Utah cuando se ingresa UT", () => {
       let ventas = new Ventas();
       expect(ventas.seleccionarEstado("UT")).toEqual("Utah");
    });
    it("deberia seleccionar Nevada cuando se ingresa NV", () => {
       let ventas = new Ventas();
       expect(ventas.seleccionarEstado("NV")).toEqual("Nevada");
    });
    it("deberia seleccionar Texas cuando se ingresa TX", () => {
       let ventas = new Ventas();
       expect(ventas.seleccionarEstado("TX")).toEqual("Texas");
    });
    it("deberia seleccionar Alabama cuando se ingresa AL", () => {
       let ventas = new Ventas();
       expect(ventas.seleccionarEstado("AL")).toEqual("Alabama");
    });

    it("deberia retornar 8.25% de impuesto para California", () => {
       let ventas = new Ventas();
       expect(ventas.calcularImpuestoEstado("CA")).toEqual("8.25%");
    });
    it("deberia retornar 6.65% de impuesto para Utah", () => {
       let ventas = new Ventas();
       expect(ventas.calcularImpuestoEstado("UT")).toEqual("6.65%");
    });
    it("deberia retornar 8% de impuesto para Nevada", () => {
       let ventas = new Ventas();
       expect(ventas.calcularImpuestoEstado("NV")).toEqual("8.00%");
    });
    it("deberia retornar 6.25% de impuesto para Texas", () => {
       let ventas = new Ventas();
       expect(ventas.calcularImpuestoEstado("TX")).toEqual("6.25%");
    });
    it("deberia retornar 4.00% de impuesto para Alabama", () => {
       let ventas = new Ventas();
       expect(ventas.calcularImpuestoEstado("AL")).toEqual("4.00%");
    });

    it("deberia calcular 82.50 de impuesto para California sobre 1000", () => {
       let ventas = new Ventas();
       expect(ventas.calcularValorImpuesto(1000, "CA")).toEqual(82.50);
    });
    it("deberia calcular 66.50 de impuesto para Utah sobre 1000", () => {
       let ventas = new Ventas();
       expect(ventas.calcularValorImpuesto(1000, "UT")).toEqual(66.50);
    });
    it("deberia calcular 80.00 de impuesto para Nevada sobre 1000", () => {
       let ventas = new Ventas();
       expect(ventas.calcularValorImpuesto(1000, "NV")).toEqual(80.00);
    });
    it("deberia calcular 40.00 de impuesto para Alabama sobre 1000", () => {
       let ventas = new Ventas();
       expect(ventas.calcularValorImpuesto(1000, "AL")).toEqual(40.00);
    });
    it("deberia confirmar la compra cuando la cantidad y el precio son validos", () => {
       let ventas = new Ventas();
       expect(ventas.confirmarCompra(2, 500)).toEqual("Compra confirmada");
    });
});
