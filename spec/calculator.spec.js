let CalculatorSpec = require("../src/calculator");
let calculatorInstance = new CalculatorSpec();
describe("spec tests for calculatorInstances", () => {
  it("should be able to sum two numbers", () => {
    expect(calculatorInstance.add(3, 5)).toEqual(8);
  });
  it("should be able to sum multiple arguments", () => {
    expect(calculatorInstance.add(3, 5, 2)).toEqual(10);
  });
  it("should be able to multiply two numbers", () => {
    expect(calculatorInstance.multiply(30, 2)).toEqual(60);
  });
  it("should be able to multiply, multiple arguments", () => {
    expect(calculatorInstance.multiply(1, 2, 3)).toEqual(6);
  });
  it("should be able to return last results of the method used(add()/multiply())", () => {
    calculatorInstance.add(1, 2);
    expect(calculatorInstance.last()).toEqual(3);
    calculatorInstance.multiply(2, 4);
    expect(calculatorInstance.last()).toEqual(8);
  });
  it('should allow "LAST" as an argument in add and multiply functions', () => {
    calculatorInstance.add(1, 2);
    expect(calculatorInstance.multiply("LAST", 5)).toEqual(15);
    calculatorInstance.multiply(2, 3);
    expect(calculatorInstance.add("LAST", 2)).toEqual(8);
  });
  it("should remember more results through get_slot and set_slot function", () => {
    calculatorInstance.add(1, 2);
    calculatorInstance.set_slot(1);
    expect(calculatorInstance.get_slot(1)).toEqual(3);
    calculatorInstance.add(10, 20);
    calculatorInstance.set_slot(2);
    expect(calculatorInstance.get_slot(2)).toEqual(30);
    calculatorInstance.multiply(2, 3);
    calculatorInstance.set_slot(3);
    expect(calculatorInstance.get_slot(3)).toEqual(6);
  });
  it("should allow the use of 'memory slots' ans 'LAST' as arguments",()=>{
    calculatorInstance.add(1,2);
    calculatorInstance.set_slot(1);
    calculatorInstance.add(10,20);
    calculatorInstance.set_slot(2);
    calculatorInstance.multiply(2,3);
    calculatorInstance.set_slot(3);
    calculatorInstance.multiply(2,3,10);
    calculatorInstance.set_slot(4);
    expect(calculatorInstance.add("SLOT_2",10)).toEqual(40);
    expect(calculatorInstance.add("SLOT_1",5)).toEqual(8);
    expect(calculatorInstance.multiply("SLOT_3",3)).toEqual(18)
  })
});
