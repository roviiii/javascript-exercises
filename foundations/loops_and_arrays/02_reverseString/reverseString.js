const reverseString = function(string) {
    let returnString="";
    for (let i=string.length-1;i>=0;i--){
      returnString+=string[i]

    }
    return returnString;
};

console.log(reverseString("reverse this asshole"));
// Do not edit below this line
module.exports = reverseString;
