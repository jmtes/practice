{
  let thisIsNowAScope = true;

  for (let i = 0; i < 5; i++) {
    // This is also a scope, activated each iteration.

    if (i % 2 === 0) {
      // This is just a block, not a scope.

      console.log(i); // 0 2 4
    }
  }
}

// EXAMPLE OF EXPLICIT BLOCK SCOPING - COMMENTED OUT TO PREVENT ERROR THROWING IN CONSOLE

// if (somethingHappened) {
//   // This is a block, but not a scope.

//   {
//     // This is an explicit block scope.
//     let msg = somethingHappened.message();
//     notifyOthers(msg);
//   }

//   recoverFromSomething();
// }

// Here, the curly brace pair inside the IF statement is an even smaller inner explicit scope block for MSG, since that variable is not needed for the entire IF block.

// Most developers would just block-scope MSG to the IF block and be done with it.

// When it comes to code with as few lines as this, it's a toss-up judgment call.
// As code grows, however...

// Just follow POLE and always define the smallest block within reason for each variable!
// Kyle would recommend using the extra explicit block scope.

// ANOTHER EXAMPLE OF EXPLICIT BLOCK SCOPING

function getNextMonthStart (dateStr) {
  var nextMonth, year;

  {
    let curMonth;
    // Matches the entire string, the year, and the month and packs them sequentially into the values on the left
    [, year, curMonth] = dateStr.match(/(\d{4})-(\d{2})-\d{2}/) || [];
    nextMonth = (Number(curMonth) % 12) + 1;
  }

  // Did we cross a year boundary?
  if (nextMonth === 1) {
    year++;
  }

  return `${year}-${String(nextMonth).padStart(2, '0')}-01`;
}

console.log(getNextMonthStart('2019-12-25')); // 2020-01-01

// curMonth was put in an explicit block scope because it was only needed for the two statements following its declaration.
// Exposing it at the function level scope would have over-exposed it.

// A MORE SUBSTANTIAL EXAMPLE

function sortNamesByLength (names) {
  var buckets = [];

  for (let name of names) {
    // Reminder to use only a double equals when comparing to null!
    if (buckets[name.length] == null) {
      buckets[name.length] = [];
    }
    buckets[name.length].push(name);
  }

  // A block to narrow the scope
  {
    let sortedNames = [];

    for (let bucket of buckets) {
      // You want to check whether or not the value at the array index has something in it.
      // For example, a name can't have a length of zero so the 0th index would be undefined.
      if (bucket) {
        // Sort each bucket alphanumerically
        bucket.sort();

        // Append sorted names to our running list
        // Essentially, we're reassigning sortedNames to a new array composed of the spread out values of sorted names in addition to the spread out values of the current bucket.
        sortedNames = [...sortedNames, ...bucket];
      }
    }

    return sortedNames;
  }
}

// In the function above, there are six identifiers declared across five different scopes.
// All of these variables could have existed in the single outer/global scope because they're all uniquely named, but that would have been very poor code organization and conducive to confusion and bugs.

console.log(sortNamesByLength([
  'Sally',
  'Suzy',
  'Frank',
  'John',
  'Jennifer',
  'Scott'
])); // ['John', 'Suzy', 'Frank', 'Sally', 'Scott', 'Jennifer']

// VAR VS LET

function diff (x, y) {
  if (x > y) {
    var tmp = x; // tmp is function-scoped to diff(), not block-scoped.
    x = y;
    y = tmp;
  }

  return y - x;
}
