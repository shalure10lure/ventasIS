import Ventas from "./ventas.js";

describe("Ventas", () => {
    it("deberia calcular el precio neto cuando se ingresan cantidad 2 y precio 500", () => {
        let ventas = new Ventas();
        ventas.cantidad = 2;
        ventas.precio = 500;
        expect(ventas.calcularPrecioNeto()).toEqual(1000);
    });

});
