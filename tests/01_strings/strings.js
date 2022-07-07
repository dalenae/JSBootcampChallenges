/* eslint-disable no-unused-vars */

function doesInclude(str, letter) {
  if (str.includes(letter)) {
    console.log('string does include letter')
    return true;
  }
  console.log('string does not include letter')
  return false; }

function isPalindrome(str) {
  let reverseStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i]; }
    if (reverseStr === str) {
      return true;
    }
    return false;
  }

function cap(str, letter) {
  const index = str.indexOf(letter);
  if (index < 0) {
    return 'letter not found';
  }
  const returnLetter = str[index + 1].toUpperCase();
  return returnLetter;

}

function firstCharacter(str1, str2) {

}

module.exports = {
  cap, firstCharacter, doesInclude, isPalindrome,
};
