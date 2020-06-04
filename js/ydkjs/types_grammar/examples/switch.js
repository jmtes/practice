// EXAMPLE A - BASIC SWITCH SYNTAX

function exampleA () {
  var a = 42;

  // Switch statements evaluate something (`a` in this case) once and then matches the resulting value to each case expression.
  // If a match is found, execution will begin in that matched case and will go until either a break is encountered or the switch block ends.
  switch (a) {
    case 2:
      console.log('a is 2');
      break;
    case 42:
      console.log('a is 42');
      break;
    default:
      // Fall back to here
      console.log('a is neither 2 nor 42');
  } // a is 42
}

// exampleA();

// EXAMPLE B - ALLOWING FOR COERCION IN CASE COMPARISONS

function exampleB () {
  var a = '42';

  switch (true) {
    case a == 10:
      console.log('a is either 10 or "10"');
      break;
    case a == 42:
      console.log('a is either 42 or "42"');
      break;
    default:
      console.log('a is none of the following: 10, "10", 42, "42"');
  } // a is either 42 or "42"

  // This works because a case clause can have any expression, not just simple values. The expression's result will be strictly matched to the test expression (`true` in this case).
  // Since Line 32 results in `true`, a match is made there.

  // Despite ==, the switch matching itself is still strict (identical to ===).
  // If the case expression resulted in something that was truthy but not strictly `true`, it wouldn't work.
  // This can bite you if you're using || or && in your case expression!

  a = 'hello world';
  var b = 10;

  switch (true) {
    case (a || b == 10):
      // Never gets here
      console.log('Either a or b is 10 or "10"');
      break;
    default:
      console.log('Oops');
  } // Oops

  // Since the result of (a || b == 10) is "hello world" and not TRUE, the strict match fails.
  // In this case, the fix would be to force the expression explicitly to be a TRUE or FALSE like so:
  // case !!(a || b == 10)
}

exampleB();
