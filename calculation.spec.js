const sum = require("./bonus_calculation")

describe("Positive testing: bondary value where sum <= 50 < sum", () => {
  
    test("Sum = 49: bonus is iqual sum", () => {
    expect(sum(25, 24)).toBe(49);
  });

  test("Sum = 50: bonus is iqual 50", () => {
    expect(sum(38, 12)).toBe(50);
  });

  test("Sum = 51: bonus is iqual 50", () => {
    expect(sum(2, 49)).toBe(50);
  });
  
  test("Sum = 1000: bonus is iqual 50", () => {
    expect(sum(132, 868)).toBe(50);
  });

  test("Sum = 0: bonus is iqual 0", () => {
    expect(sum(0, 0)).toBe(0);
  });
});


describe("Negative testing: bondary value where sum <= 50 < sum", () => {

  test("Sum is negative with one negative number", () => {
    expect(sum(-5, 0)).toBe(-5);
  });

  test("Sum is negative with two negative numbers", () => {
    expect(sum(-5, -45)).toBe(-50);
  });

  test("Sum is equal 1", () => {
    expect(sum(0, 1)).toBe(1);
  });

});

describe("Negative testing: a and b is not a number", () => {
  
    test("a & b are numbers in string", () => {
    expect(sum("25", "25")).toBe(50);
  });

  test("a & b are words in string", () => {
    expect(sum("twenty", "thirty")).toBe("twentythirty");
  });

  test("a is number, b is string", () => {
    expect(sum(25, "ten")).toBe("25ten");
  });

  test("a & b are numbers in string", () => {
    expect(sum(25, "25")).toBe(50);
  });

  test("a & b is not defined", () => {
    expect(sum()).toBe(NaN);
  });

});