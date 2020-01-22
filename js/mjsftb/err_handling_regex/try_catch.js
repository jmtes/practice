const user = {
  email: 'juno@gmail.com'
};

try {
  // Produce a reference error
  myFunction();
} catch (error) {
  console.log(error);

  // Get error message only
  console.log(error.message);

  // Get error name only
  console.log(error.name);

  // Testing for type of error
  console.log(error instanceof ReferenceError);

  // Throwing a custom error
  if (!user.name) {
    throw new SyntaxError('User has no name');
  }
} finally {
  console.log('Finally runs regardless of whether the try or catch block was executed.');
}

console.log('Program continues');
