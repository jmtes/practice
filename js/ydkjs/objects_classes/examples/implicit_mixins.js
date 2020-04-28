var Something = {
  cool: function () {
    this.greeting = 'Hello World!';
    this.count = this.count ? this.count + 1 : 1;
  }
};

Something.cool();
console.log(Something.greeting); // hello World!
console.log(Something.count); // 1

var Another = {
  cool: function () {
    // Implicit mixin of Something to Another
    Something.cool.call(this);
  }
};

// In Line 15, we are essentially "borrowing" the function Something.cool() and calling it in the context of Another instead of Something.
// The end result is that the assignments that Something.cool() makes are applied to the Another object instead of the Something object.

// So, it is said the we "mixed in" Something's behavior with that of Another.

// While this technique seems to take useful advantage of THIS binding, the code was made more brittle with the call on Line 15.
// It cannot be made into a relative and more flexible reference.

// Heed mixins with caution and just avoid them whenever possible to keep cleaner and more maintainable code.

Another.cool();
console.log(Another.greeting); // Hello World!
console.log(Another.count); // 1 (not shared state with Something)

Another.cool();
console.log(Another.count); // 2
console.log(Something.count); // 1
// Something's count doesn't change
