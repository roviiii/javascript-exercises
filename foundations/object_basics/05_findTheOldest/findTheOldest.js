const findTheOldest = function(people) {
return people.sort((a,b)=>{
  a.yearOfDeath=a.yearOfDeath??2026
  b.yearOfDeath=b.yearOfDeath??2026
  return (b.yearOfDeath-b.yearOfBirth)-(a.yearOfDeath-a.yearOfBirth)  
})[0]
};


// Do not edit below this line
module.exports = findTheOldest;
