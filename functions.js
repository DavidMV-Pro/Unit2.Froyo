/*User input for flavors */

const userInputString = prompt(
  "Please enter a list of comma-separated froyo flavors.",
);

/*Split input into array. */
const stringArray = userInputString.split(",");

/* function to count flavor occurences. */
function countOccurence(stringArray) {
const counts = {};
for (let element of stringArray) {
  counts[element] = counts[element] ? counts[element] + 1 : 1;
}
return counts;
}

/*Count each flavor when it is entered. */
const flavorcounts = countOccurence(stringArray);

/* Shows flavor and quantity ordered in console */
console.table(flavorcounts);