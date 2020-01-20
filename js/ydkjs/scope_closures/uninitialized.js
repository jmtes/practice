// With VAR declarations, the variable is hoisted to the top of its scope and initialized to "undefined".

// LET and CONST are not quite the same in this respect though.

// console.log(studentName);
// // ReferenceError: Cannot access studentName before initialization

// let studentName = 'Amon';

// You would think THIS would work, but it doesn't either:

// studentName = 'Amon';

// console.log(studentName);

// let studentName;

// For let/const, the ONLY way to initialize an uninitialized variable is with the assignment attached to a declaration statement.
// An assignment by itself is insufficient.

// This period of time from the entering of a scope to where the auto-init of the variable occurs is the Temporal Dead Zone.
