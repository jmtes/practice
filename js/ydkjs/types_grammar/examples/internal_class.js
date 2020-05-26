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

// EXAMPLE D - UNBOXING WITH VALUEOF()

var a = new String('solitude');
var b = new Number(5);
var c = new Boolean(false);

console.log(a.valueOf()); // "solitude"
console.log(b.valueOf()); // 5
console.log(c.valueOf()); // false

// EXAMPLE E - IMPLICIT UNBOXING

var d = new String('memories');
var e = d + '';

console.log(typeof d); // object
console.log(typeof e); // string

console.log(d); // String {"memories"}
console.log(e); // "memories"
