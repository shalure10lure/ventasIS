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

});
