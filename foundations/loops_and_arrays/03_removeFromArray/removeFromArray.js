const removeFromArray = function(array, ...remove) {
  array.forEach(element => element.toString());
  return  array.filter(value => !remove.includes(value));
};

console.log(removeFromArray([1,2,3,4,5,2],2,4));

// Do not edit below this line
module.exports = removeFromArray;
