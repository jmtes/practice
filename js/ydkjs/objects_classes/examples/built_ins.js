// EXAMPLE A

var strPrimitive = 'Open up your eyes';
console.log(typeof strPrimitive); // string
console.log(strPrimitive instanceof String); // false

var strObject = new String('There is nothing');
console.log(typeof strObject); // object
console.log(strObject instanceof String); // true

// Inspect the object subtype
console.log(Object.prototype.toString.call(strObject)); // [object String]

// The outuput of line 10 reveals strObject is an object that was created by the String constructor.

// It's strongly preferred by the majority of the JS community to use the literal form of a value rather than the constructed form.

// EXAMPLE B - PRIMITIVE TO OBJECT TYPE COERCION

console.log(strPrimitive.length); // 17
console.log(strPrimitive.charAt(3)); // n

// The primitive value "Open up your eyes" is not an object.
// It's an immutable primitive value.
// In order to perform operations such as checking its length or indexing it, a String object is required.

// Luckily, JS automatically coerces a string primitive to a String object when necessary.
// So, you almost never need to explicitly create the Object form.
