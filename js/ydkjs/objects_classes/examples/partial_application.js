// USING PARTIAL APPLICATION AND NEW OVERRIDING TO PRE-SET FUNCTION PARAMETERS

function makeCompoundWord (word1, word2) {
  this.value = word1 + word2;
}

// Using NULL here because we don't care about the THIS hard-binding in this scenario and it will be overridden by the NEW operator anyway!
// Pre-sets the word1 param to "bed"
var appendToBed = makeCompoundWord.bind(null, 'bed');

// These calls to appendToBed will provide the word2 parameter, which hadn't been pre-set!
var word1 = new appendToBed('room');
var word2 = new appendToBed('side');

console.log(word1.value); // "bedroom"
console.log(word2.value); // "bedside"
