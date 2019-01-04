// Create an array that contains the words in the sentence
let sentence = [
  "The",
  "walrus",
  "danced",
  "through",
  "the",
  "trees",
  "in",
  "the",
  "light",
  "of",
  "the",
  "moon"
];

let newSentence = ["light", "of", "the", "moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/

// Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.

function addExcitement(theWordArray, puncutation) {
  // Each time the for loop executes, you're going to add one more word to this string
  let buildMeUp = "";

  for (let i = 0; i < theWordArray.length; i++) {
    if ([i] % 3 === 0 && [i] != 0) {
      buildMeUp += " " + theWordArray[i] + puncutation;
    } else {
      buildMeUp += " " + theWordArray[i];
    }
    // Print buildMeUp to the console
    console.log(buildMeUp);
  }
}
let questionMark = "?";
let asteric = "*";
// Invoke the function and pass in the array
//addExcitement(newSentence);
addExcitement(sentence, questionMark);
addExcitement(sentence, asteric);
