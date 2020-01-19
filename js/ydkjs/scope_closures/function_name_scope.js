// FUNCTION NAME SCOPE EXAMPLE

// Consider the following:

function askQuestion () {
  // ...
}

// This is a function definition being used as a declaration. The definition will hoist along with the identifier `askQuestion` so that `askQuestion` has the value of the function definition from the get-go.

var makeComment = function () {
  // ...
};

// Meanwhile, this is a function expression, a function definition being used as a value. The identifier `makeComment` will hoist to the top of the enclosing scope because of the var, but the function definition will NOT hoist along with it. Thus the value of `makeComment` will be initialized to undefined, and will stay undefined until the program reaches the line where it is assigned the value of the function definition.

// ASSIGNMENT OF A NAMED FUNCTION EXPRESSION

var makeInquiry = function ofTheTeacher () {
  console.log(ofTheTeacher);
};

// makeInquiry ends up in the outer scope.
makeInquiry(); // Logs the function definition

// The ofTheTeacher identifier however is declared as a read-only variable inside of the function itself and is thus inaccessible from the outer scope.

// console.log(ofTheTeacher); // Reference error

// ASSIGNMENT OF AN ANONYMOUS FUNCTION EXPRESSION

var makeQuery = function () {
  // ...
};

// Anon function expressions have no name identifiers, so they don't have an effect on either the outer scope or their own.
