const sumAll = function(first,last) {
console.log(Number.isInteger(first),  Number.isInteger(last));
if (first <0 || last <0 ||  !Number.isInteger(first) ||  !Number.isInteger(last) ){
    return "ERROR";
} 
let sum=0;
let i=first
while(i!=last){
  sum+=i;
  i+=i<=last?1:-1;
  

  }

return sum+last;
};
console.log(sumAll(123,1));
// Do not edit below this line
module.exports = sumAll;
