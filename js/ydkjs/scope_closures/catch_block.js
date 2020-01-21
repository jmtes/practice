try {
  doesntExist();
}
catch (err) {
  console.log(err);

  let onlyHere = true;
  var outerVariable = true;
}

console.log(outerVariable);

// console.log(err); // Throws ReferenceError because err is block scoped to the catch clause.

// EXAMPLE OF A CATCH CLAUSE WITHOUT THE ERR DECLARATION

try {
  doOptionOne();
}
catch {
  console.log('On to Plan B!');
}
