// Your code here.
function countBs (string) {
    var counter = 0;
    for (var i = 0; i < string.length; i++) {
         if (string.charAt(i) === "B") {
             counter += 1;
         }
    }
    return counter;
};

function countChar (string, letter) {
    var counter = 0;
    for (var i = 0; i < string.length; i++) {
      if (string.charAt(i) === letter) {
        counter += 1;
      }
    }
  return counter;
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4