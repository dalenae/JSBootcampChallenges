/* eslint-disable no-unused-vars */
function multiply(arr) {
  const flatArr = arr.flat();
  let total = 1;
  for(let i = 0; i < flatArr.length; i++) {
    total *= flatArr[i];
  }
  return total;
}

function includesCopy(arr, searchValue) {
  for (let i = 0; i < arr.length; i++) { 
    if (arr[i] === searchValue) { 
      return true;
    }
  }
  return false;
}

function inventory(arr) {

}

function camelCase(str) {

}

function joiner() {

}

module.exports = {
  multiply, includesCopy, inventory, camelCase, joiner,
};
