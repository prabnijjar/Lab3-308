/*/
//grade to letter
// defining variables
var numbergrade = 73; // Example grade

var lettergrade;

//calculations for what each percentage means as a letter grade
if (numbergrade >= 100) {
  lettergrade = 'A+';
} else if (numbergrade >= 90) {
  lettergrade = 'A';
} else if (numbergrade >= 80) {
  lettergrade = 'B+';
} else if (numbergrade >= 70) {
  lettergrade = 'C';
} else if (numbergrade >= 60) {
  lettergrade = 'C-';
} else if (numbergrade >= 50) {
  lettergrade = 'D';
} else if (numbergrade < 50) {
  lettergrade = 'F';
}

//Processing information into a statement
console.log(`A grade of ${numbergrade} is equal to ${lettergrade}`);
/*/

function nGrade (numbergrade){
    if (numbergrade >= 100) {
        return ("A+");
      } else if (numbergrade >= 90) {
        return ("A");
      } else if (numbergrade >= 80) {
        return ("B");
      } else if (numbergrade >= 70) {
        return ("C");
      } else if (numbergrade >= 60) {
        return ("C-");
      } else if (numbergrade >= 50) {
        return ("D");
      } else if (numbergrade < 50) {
        return ("F");
      }   
}

console.log(nGrade(70));
console.log(nGrade(90));
console.log(nGrade(45));
