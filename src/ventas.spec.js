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
});
