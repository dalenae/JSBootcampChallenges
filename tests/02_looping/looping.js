/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function factorial(num) {
  let factorialOfNum = 1;
  for (let i = 1; i <= num; i++) {
    factorialOfNum = factorialOfNum * i;
  }
  return factorialOfNum;
}

function stringReverse(str) {
  let strReversed = '';
  const charArray = str.split('');
  for (let i = charArray.length - 1; i >= 0; i--) {
    strReversed = strReversed + charArray[i];
  }
  return strReversed;
}

// do not use built in slice method.
function slicer(originalString, startIdx, endIdx) {

}

function addTheEvens(num) {

}

module.exports = {
  factorial, stringReverse, slicer, addTheEvens,
};
