import {thermometer} from "@src/thermometer-tdd";

describe("Kata Thermometer using TDD", () => {
    it('should return 0 when no temperature is provided', function () {
        expect(thermometer()).toBe(0);
    });
});
