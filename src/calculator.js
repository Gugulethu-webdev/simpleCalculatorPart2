module.exports =  class Calculator {
  constuctor(...numbers) {
    this.numbers = numbers;
    this.results;
    this.lastResults = 0;
    this.setSlotArray = [];
    this.getSlotArray = [];
  }
  add(...numbers) {
    this.results = 0;
    for (var i = 0; i < numbers.length; i++) {
      if (numbers.includes("LAST")) {
        for (var j = 1; j < numbers.length; j++) {
          this.results = this.lastResults + numbers[j];
        }
      } else {
        this.results += numbers[i];
      }
    }
    this.lastResults = this.results;
    return this.results;
  }
  multiply(...numbers) {
    this.results = 1;
    for (var j = 0; j < numbers.length; j++) {
      if (numbers.includes("LAST")) {
        for (var i = 1; i < numbers.length; i++) {
          this.results = this.lastResults * numbers[i];
        }
      } else {
        this.results *= numbers[j];
      }
    }
    this.lastResults = this.results;

    return this.results;
  }
  last() {
    return this.lastResults;
  }
  set_slot(n) {
    this.setSlotArray = [];
    this.setSlotArray.push(this.lastResults);
  }
  get_slot(n) {
    this.setSlotArray;

    for (var i = 0; i < this.setSlotArray.length; i++) {
      var i = n - 1;
    
       this.setSlotArray[i];
    }
    return this.setSlotArray[i]
  }
}
// let cc = new Calculator();
// cc.multiply(1, 2);
// cc.add(2, 3);
// console.log(cc.multiply("LAST", 3));
// //console.log(cc.set_slot(0));
// console.log(cc.get_slot(0));
