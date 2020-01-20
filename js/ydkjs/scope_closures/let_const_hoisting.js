// LET AND CONST DO HOIST!

var studentName = 'Alfred';

{
  console.log(studentName); // Throws TDZ ReferenceError

  let studentName = 'Hillary';

  console.log(studentName); // "Hillary"
}

// If let studentName DIDN'T hoist, the code should've printed "Alfred" instead of throwing a TDZ error.

// This can effectively be seen as:

// var studentName = 'Alfred';

// {
//   let studentName = UNINITIALIZED;

//   console.log(studentName); // You can't access it! It's in the TDZ!

//   let studentName = 'Hillary'; // Again, only a declaration with an attached assignment can bring a variable out of TDZ.

//   console.log(studentName); // "Hillary"
// }
