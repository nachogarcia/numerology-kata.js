const expect = require("chai").expect;

function calculateNumber(date){
  return ''.concat(date.getDate(), date.getMonth() + 1, date.getFullYear())
    .split('')
    .map( n => Number(n) )
    .reduce( (a, b) => (Math.floor((a + b) / 10)) + ((a + b) % 10) )
}

describe("calculateNumber", function(){
  it("calculates the number of a date", function(){
    let date = new Date('06/14/2010')

    let result = calculateNumber(date)

    expect(result).to.eq(5)
  });
});
