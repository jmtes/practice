if (!Function.prototype.softBind) {
	Function.prototype.softBind = function(obj) {
		var fn = this;
		var curried = [].slice.call( arguments, 1 );
	  var bound = function bound() {
				return fn.apply(
					(!this ||
						(typeof window !== "undefined" &&
							this === window) ||
						(typeof global !== "undefined" &&
							this === global)
					) ? obj : this,
					curried.concat.apply( curried, arguments )
				);
			};
		bound.prototype = Object.create( fn.prototype );
		return bound;
	};
}

// This works similarly to the built-in ES5 bind() utility, except with soft binding behavior.

// It wraps the specified function in logic that checks the THIS at call-time.
// If the THIS is global or undefined, it uses a pre-specified alternate default (the obj parameter)
// Otherwise, THIS is left untouched.

// It also provides optional currying.

// For its usage see soft_binding_example.js
