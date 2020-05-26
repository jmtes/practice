// EXAMPLE A - INDIRECTLY ACCESSING [[CLASS]]

var internalClass = Object.prototype.toString;

// Here, the internal [[Class]] has the value "Array":
console.log(internalClass.call([1, 2, 3])); // "[object Array]"

// And here, it has the value "RegExp":
console.log(internalClass.call(/regex-literal/)); // "[object RegExp]"

// EXAMPLE B - NULL AND UNDEFINED

console.log(internalClass.call(null)); // "[object Null]"
console.log(internalClass.call(undefined)); // "[object Undefined]"

// EXAMPLE C - BOXING

console.log(internalClass.call('abc')); // "[object String"
console.log(internalClass.call(123)); // "[object Number]"
console.log(internalClass.call(true)); // "[object Boolean]"
