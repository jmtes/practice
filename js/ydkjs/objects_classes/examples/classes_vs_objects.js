// Let's examine more concrete code scenarios to demonstrate the difference between classes and behavior delegation.

// A typical scenario in frontend web development is creating UI widgets (buttons, dropdowns, etc).

// EXAMPLE A - USING AN OO DESIGN PATTERN

// This is how we'd implement the class design in pure JS without any class helper libraries/syntax:

// Parent WidgetOO class
function WidgetOO (width, height) {
  this.width = width || 50;
  this.height = height || 50;
  this.elem = null;
}

WidgetOO.prototype.render = function (where) {
  if (this.elem) {
    this.elem.style.width = `${this.width}px`;
    this.elem.style.height = `${this.height}px`;

    where.appendChild(this.elem);
  }
};

// Child class
function ButtonOO (width, height, label) {
  // Super constructor call
  WidgetOO.call(this, width, height);
  this.label = label || 'Default';

  this.elem = document.createElement('button');
  this.elem.textContent = this.label;
}

// Make ButtonOO inherit from WidgetOO
ButtonOO.prototype = Object.create(WidgetOO.prototype);

// Override base "inherited" render function
ButtonOO.prototype.render = function (where) {
  // Super call
  WidgetOO.prototype.render.call(this, where);
  this.elem.onclick = this.onClick.bind(this);
};

ButtonOO.prototype.onClick = function (event) {
  console.log(`ButtonOO ${this.label} clicked!`);
};

/* START OO CODE EXECUTION
document.addEventListener('DOMContentLoaded', function () {
  var body = document.querySelector('body');
  var btn1 = new ButtonOO(125, 30, 'Hello');
  var btn2 = new ButtonOO(150, 40, 'World');

  btn1.render(body);
  btn2.render(body);
});
END OO CODE EXECUTION */

// OO design patterns tell us to declare a base render(...) in the parent class, then override it in our child class.
// This isn't to replace it per se, but rather to augment the base functionality with button-specific behavior.

// Notice the ugliness of explicit pseudo-polymorphism in Lines 26 and 39!
// All to fake "super" calls from the child "class" methods back up to the "parent" base methods!

// EXAMPLE B - ES6 CLASS SYNTACTIC SUGAR

class WidgetES6 {
  constructor (width, height) {
    this.width = width || 50;
    this.height = height || 50;
    this.elem = null;
  }

  render (where) {
    if (this.elem) {
      this.elem.style.width = `${this.width}px`;
      this.elem.style.height = `${this.height}px`;

      where.appendChild(this.elem);
    }
  }
}

class ButtonES6 extends WidgetES6 {
  constructor (width, height, label) {
    super(width, height);
    this.label = label || 'Default';
    this.elem = document.createElement('button');
    this.elem.textContent = this.label;
  }

  render (where) {
    super.render(where);
    this.elem.onclick = this.onClick.bind(this);
  }

  onClick (event) {
    console.log(`ButtonES6 ${this.label} clicked!`);
  }
}

/* START ES6 CLASS CODE EXECUTION
document.addEventListener('DOMContentLoaded', function () {
  var body = document.querySelector('body');
  var btn1 = new ButtonES6(125, 30, 'High');
  var btn2 = new ButtonES6(150, 40, 'Fashion');

  btn1.render(body);
  btn2.render(body);
});
END ES6 CLASS CODE EXECUTION */

// A lot of the syntax uglies from Example A have been smoothed over with ES6 classes.

// Make no mistake though, these are still not real classes!
// Solving syntax hiccups does not substantially solve our class confusions in JS!

// Whether you use the classic prototypal syntax or the new ES6 classes, you've still made a choice to model the problem with "classes".
// As has been demonstrated, this choice in JS is only going to cause you extra headaches and mental tax!

// EXAMPLE C - USING OLOO DELEGATION

var Widget = {
  init: function (width, height) {
    this.width = width || 50;
    this.height = height || 50;
    this.elem = null;
  },
  insert: function (where) {
    if (this.elem) {
      this.elem.style.width = `${this.width}px`;
      this.elem.style.height = `${this.height}px`;

      where.appendChild(this.elem);
    }
  }
};

var Button = Object.create(Widget);

Button.setup = function (width, height, label) {
  // Delegated call
  this.init(width, height);
  this.label = label || 'Default';

  this.elem = document.createElement('button');
  this.elem.textContent = this.label;
};

Button.build = function (where) {
  // Delegated call
  this.insert(where);
  this.elem.onclick = this.onClick.bind(this);
};

Button.onClick = function (event) {
  console.log(`Button ${this.label} clicked!`);
};

document.addEventListener('DOMContentLoaded', function () {
  var body = document.querySelector('body');
  var btn1 = Object.create(Button);
  var btn2 = Object.create(Button);

  btn1.setup(125, 30, 'Mood');
  btn2.setup(150, 40, 'Music');

  btn1.build(body);
  btn2.build(body);
});

// With this approach, we don't think of Widget as a parent and Button as a child.
// Rather, Widget is just an object and is sort of a utility collection that any specific type of widget may want to delegate to.

// Button is just a standalone object, it just happens to have a delegation link to Widget.

// Notice that we didn't share the same method name render(...) in both objects the way classes suggest.
// Instead, we chose different names, insert(...) and build(...), that were more descriptive of what each task does specifically.
// The initialization methods are called init(...) and setup(...) for the same reason!

// We also avoided the ugliness of explicit pseudo-polymorphsim in Lines 144 and 153!
// Instead, we used simple, relative, delegated calls.

// Notice that what was previously done with just one call:
// var btn1 = new Button(...);
// is now done with two:
// var btn1 = Object.create(Button);
// btn1.setup(...);

// While this may appear to be a drawback, it's actually another benefit of OLOO style code!

// With class constructors, you're strongly encouraged to do both construction and initialization in the same step.
// However, there are many cases where being able to do these tasks separately is more flexible!

// Let's say you create all your instances in a pool at the beginning of your program, but you wait until they're pulled from the pool and used before initializing them with a specific setup.

// OLOO better supports the principle of separation of concerns!
// Creation and initialization do not have to be conflated into the same operation!
