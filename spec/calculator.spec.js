let CalculatorSpec = require("../src/calculator");
let calculatorInstance = new CalculatorSpec();
describe("spec tests for calculatorInstance", () => {
  it("should be able to sum two numbers", () => {
    expect(calculatorInstance.add(3, 5)).toEqual(8);
  });
  it("should be able to sum multiple numbers", () => {
    expect(calculatorInstance.add(3,5,2)).toEqual(10);
  });
  it("should be able to multiply two numbers", () => {
    expect(calculatorInstance.multiply(30,2)).toEqual(60);
  });
  it("should be able to multiply, multiple numbers", () => {
    expect(calculatorInstance.multiply(1, 2, 3)).toEqual(6);
  });
  it("should be able to return results of the last method used(add()/multiply())", () => {
    expect(calculatorInstance.add(1, 2, 4)).toEqual(7);
    expect(calculatorInstance.last()).toEqual(7);
    expect(calculatorInstance.multiply(2, 4)).toEqual(8);
    expect(calculatorInstance.last()).toEqual(8);
  });
  it("should allow \"LAST\" as an argument in add and multiply functions",()=>{
      expect(calculatorInstance.add(1,2)).toEqual(3)
      expect(calculatorInstance.multiply("LAST",5)).toEqual(15)
  })
  it("should remeber more results through get_slot and set_slot function",()=>{
      expect(calculatorInstance.add(1,2)).toEqual(3)
      expect(calculatorInstance.set_slot(1))
      expect(calculatorInstance.get_slot(1))
      expect(calculatorInstance.add(10,20)).toEqual(30)
    
      expect(calculatorInstance.set_slot(2))
      expect(calculatorInstance.get_slot(2))
    
      expect(calculatorInstance.add(100,200)).toEqual(300)
      expect(calculatorInstance.get_slot(2)) 
      expect(calculatorInstance.last()).toEqual(300)
      
  })
});
