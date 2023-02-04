import {thermometer} from "@src/thermometer-tdd";

describe("Kata Thermometer using TDD", () => {
    it('should return 0 when no temperature is provided', function () {
        expect(thermometer()).toBe(0);
    });
    it('should return a temperature when one temperature is provided', function () {
        const temperature = 10;
        expect(thermometer(temperature)).toBe(10);
    });
    it('should return the lowest temperature when two temperatures are provided', function () {
        const temperature1 = 10;
        const temperature2 = 5;
        expect(thermometer(temperature1, temperature2)).toBe(5);
    });
    it('should return the lowest temperature when three temperatures are provided', function () {
        const temperature1 = 10;
        const temperature2 = 5;
        const temperature3 = 1;
        expect(thermometer(temperature1, temperature2, temperature3)).toBe(1);
    });

    it('should throw an error when more thant 10000 temperatures are provided', function () {
        const temperatures = Array.from({length: 10001}, () => 1);
        expect(() => thermometer(...temperatures)).toThrowError("Too many temperatures");
    });

    it('should return the positive temperature when the distance to 0 is the same', function () {
        const temperature1 = -5;
        const temperature2 = 5;
        const temperature3 = 10;
        expect(thermometer(temperature1, temperature2, temperature3)).toBe(5);
    });
});
