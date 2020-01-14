// The `this` keyword will be capitalized in comments for clarity.

// The true importance of THIS shows when considering how it powers prototype-delegated function calls.

// One of the main reasons THIS supports dynamic context based on how the function is called is so that method calls on objects which delegate through the prototype chain still maintain the expected THIS.

// EXAMPLE A
var homework = {
  study () {
    console.log(`Please study ${this.topic}`);
  }
};

var jsHomework = Object.create(homework);
jsHomework.topic = 'JS';
jsHomework.study(); // "Please study JS"

var mathHomework = Object.create(homework);
mathHomework.topic = 'Math';
mathHomework.study(); // "Please study Math"

// When the study() method was invoked on jsHomework and mathHomework, it was delegated to the linked homework object's prototype because it wasn't defined in either jsHomework or mathHomework. Despite that though, the THISes in study() still resolved to jsHomework and mathHomework!
// jsHomework and mathHomework DO have defined topic properties, so this.topic in their study() methods resolved to "JS" and "Math" respectively.

// This code would be far less useful if THIS resolved to homework. Yet in many other languages, it would seem THIS would be homework because the study() method is indeed defined in homework.
// The dynamic quality of JS's THIS is a critical component of allowing prototype delegation and the CLASS keyword to work as expected!
