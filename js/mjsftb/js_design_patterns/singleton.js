// The singleton pattern is really just a manifestation of the module pattern.
// A singleton object is an immediate anonymous function that can only return one instance of an object at a time. Repeated calls to the same constructor will just return the same instance.
// Like the module pattern, it maintains private attributes which nothing from the outside can access.

// An example of when you may want to use the singleton is when you only want, for instance, one user object created at a time (perhaps a logged-in user) as it would prevent two users from being created at once.

// Oftentimes, singletons are frowned upon because they give you a global point of access rather than embracing encapsulation. They can also be difficult to debug.

// BASIC STRUCTURE OF A SINGLETON PATTERN
const Singleton = (function () {
  let instance;

  function createInstance () {
    const object = { name: 'Megan' };
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB); // "true"

// There will never be more than one instance of the object.
