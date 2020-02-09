function identify () {
  return this.name.toUpperCase();
}

function speak () {
  var greeting = "Hello, I'm " + identify.call(this);
  console.log(greeting);
}

var me = {
  name: 'Masako'
};

var you = {
  name: 'Dia'
};

// If I recall correctly, call() is invoked using a function and whatever's passed as parameter is set as the execution context of the function.
// Maybe that implies that the THIS will be set to that parameter?
identify.call(me); // MASAKO
identify.call(you); // DIA

speak.call(me); // Hello, I'm MASAKO
speak.call(you); // Hello, I'm DIA

// The code above could have been written as follows:

function identify2 (context) {
  return context.name.toUpperCase();
}

function speak2 (context) {
  var greeting = "Hello, I'm " + identify2(context);
  console.log(greeting);
}

console.log(identify2(you)); // DIA
speak2(me); // Hello, I'm MASAKO

// However, THIS provides a more elegant way of implicitly "passing along" an object reference, leading to cleaner API design and easier re-use.
