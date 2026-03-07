import { sum, subtract, multiply, divide } from "../BasicMath";

describe("Basic Math functions", () => {
    /**
     * Test case for sum function
     */
	test("should sum two numbers correctly", () => {
        /** Assertion part of test case */
		expect(sum(10, 50)).toBe(60);
	});
    /**
     * Test case for subtract function
     */
	it("should return the difference of two numbers", () => {
		expect(subtract(20, 17)).toBe(3);
	});
    it("should return the difference of two numbers, should not return negative value", () => {
		expect(subtract(10, 17)).toBe(7);
	});
    /**
     * Test case for multiply function
     */
    it("should return the multiplication of two numbers", () => {
        expect(multiply(5, 4)).toBe(20);
    });
    /**
     * Test case for divide function
     */
    it("should return the division of two numbers", () => {
        expect(divide(10, 2)).toBe(5);
    });
    it("should return an error message for division by zero", () => {
        expect(divide(10, 0)).toBe(
            "Error: Division by zero is not allowed."
        );
    });
});
