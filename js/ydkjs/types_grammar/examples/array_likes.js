// EXAMPLE A - CONVERSION WITH SLICE

function theCrew () {
  // When slice(...) is called without parameters like so, it has the effect of duplicating the array or array-like object it was invoked with:
  var crew = Array.prototype.slice.call(arguments);
  crew.push('et al');
  console.log(crew);
}

theCrew('Annie', 'Lydia', 'Val'); // ["Annie", "Lydia", "Val", "et al"]

// EXAMPLE B - CONVERSION WITH ARRAY.FROM(...)

function thePals () {
  var pals = Array.from(arguments);
  pals.push('You');
  console.log(pals);
}

thePals('Anri', 'Julia', 'Lara'); // ["Anri", "Julia", "Lara", "You"]
