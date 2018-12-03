var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {

  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it("it should display the number clicked", function(){
    calculator.numberClick(5)
    assert.equal(5, calculator.runningTotal)
  })

  it("can click operator", function(){
    calculator.operatorClick('+')
    assert.equal('+', calculator.previousOperator)
  })

  it("can clear click", function(){
    calculator.clearClick()
    assert.equal(0,calculator.runningTotal)
  })

  it("should add", function(){
    calculator.numberClick(5)
    calculator.operatorClick('+')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.equal(7, calculator.runningTotal)
  })

  it("should subtract", function(){
    calculator.numberClick(8)
    calculator.operatorClick('-')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.equal(6, calculator.runningTotal)
  })

  it("should multiply", function(){
    calculator.numberClick(7)
    calculator.operatorClick('*')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.equal(14, calculator.runningTotal)
  })

  it("should divide", function(){
    calculator.numberClick(4)
    calculator.operatorClick('/')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.equal(2, calculator.runningTotal)
  })

  it("can chain multiple operators together", function(){
    calculator.numberClick(5)
    calculator.operatorClick('+')
    calculator.numberClick(3)
    calculator.operatorClick('/')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.equal(4, calculator.runningTotal)
  })

});
