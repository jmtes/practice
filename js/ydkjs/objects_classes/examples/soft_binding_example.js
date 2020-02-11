// SOFT BINDING UTILITY

if (!Function.prototype.softBind) {
	Function.prototype.softBind = function(obj) {
		var fn = this,
			curried = [].slice.call( arguments, 1 ),
			bound = function bound() {
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

function intro () {
  console.log(`Hi, I'm ${this.name}`);
}

var name = 'Philomena';

var person1 = { name: 'Hana' };
var person2 = { name: 'Tobias' };
var person3 = { name: 'Emery' };

var hanaDefaultIntro = intro.softBind(person1);

hanaDefaultIntro(); // "Hi, I'm Hana"

person2.intro = intro.softBind(person1);
person2.intro(); // "Hi, I'm Tobias"

hanaDefaultIntro.call(person3); // "Hi, I'm Emery"

// The THIS will fall back to the object we set as the default in line 31, rather than global or undefined.
setTimeout(person2.intro, 10); // "Hi, I'm Hana"

intro(); // "Hi, I'm Philomena"

// The soft-bound version of intro() can be manually THIS-bound to person2 or person3 as shown, but it falls back to person1 if default binding would otherwise apply.
