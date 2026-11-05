const palindromes = function (string) {
let left= 0;
let right=string.length-1;
while (left<right){
    while(!/^[A-Za-z0-9]*$/.test(string[left])){
      left+=1;
    }
    while(!/^[A-Za-z0-9]*$/.test(string[right])){
      right-=1;
    }
    if (string[left].toLowerCase()!==string[right].toLowerCase()){
        return false 
    }
    left+=1
    right-=1
    
}
return true 
};

// Do not edit below this line
module.exports = palindromes;
