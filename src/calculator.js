module.exports = class Calculator {
  constructor(...numbers) {
    this.numbers = numbers;
    this.results;
    this.slotRegex = /SLOT_/g;
    this.Sliced;
    this.resArray = [];
    this.slotArray = [];
  }
  add(...numbers) {
    this.results = 0;
    for (var i = 0; i < numbers.length; i++) {
      if (numbers.includes("LAST")) {
        numbers[0] = this.resArray[this.resArray.length - 1];
      } else if (this.slotRegex.test(numbers[0]) == true) {
        this.Sliced = numbers[0].slice(5, 6);
        numbers[0] = this.slotArray[this.Sliced - 1];
      }
      this.results += numbers[i];
    }
    this.resArray.push(this.results);
    return this.results;
  }

  multiply(...numbers) {
    this.results = 1;
    for (var i = 0; i < numbers.length; i++) {
      if (numbers.includes("LAST"))
        numbers[0] = this.resArray[this.resArray.length - 1];
      else if (this.slotRegex.test(numbers[0]) == true) {
        this.Sliced = numbers[0].slice(5, 6);
        numbers[0] = this.slotArray[this.Sliced - 1];
      }
      this.results *= numbers[i];
    }
    this.resArray.push(this.results);
    return this.results;
  }

  last() {
    return this.resArray[this.resArray.length - 1];
  }

  set_slot(n) {
    n;
    this.slotArray.push(this.results);
  }
  get_slot(n) {
    return this.slotArray[n - 1];
  }
};
