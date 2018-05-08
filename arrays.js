var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
 let updatedChocolateBars = element...array;
 return updatedChocolateBars;
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}