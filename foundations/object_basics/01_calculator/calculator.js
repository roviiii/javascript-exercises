const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(array) {
    return array.reduce((total, num) => total + num, 0);
};



const multiply = function(array) {
return array.reduce((total, num) => total * num, 1);
};

const power = function(base,expo) {
	return base**expo
};

const factorial = function(number) {
  let current= number 
  let factorial=1;
	while (current>0){
      factorial*=current
      current-=1
  }
  return factorial
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
