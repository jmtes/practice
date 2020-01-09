// The factory pattern is a way of creating an interface for creating objects wherein we can let subclasses define which classes to instantiate. This pattern is often used in apps to manage, maintain, and manipulate collections of objects that are different, but at the same time have many common characteristics.

// A good example of this would be a site that keeps track of members that may have different memberhip types (free, premium, etc.). Regardless of the membership distinction the members would all have the same methods and attributes.

// BASIC STRUCTURE OF THE FACTORY PATTERN
function MemberFactory () {
  this.createMember = function (name, type) {
    let member;

    if (type === 'simple') {
      member = new SimpleMember(name);
    } else if (type === 'standard') {
      member = new StandardMember(name);
    } else if (type === 'super') {
      member = new SuperMember(name);
    }

    member.type = type;

    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    };

    return member;
  };
}

const SimpleMember = function (name) {
  this.name = name;
  this.cost = '$5';
};

const StandardMember = function (name) {
  this.name = name;
  this.cost = '$15';
};

const SuperMember = function (name) {
  this.name = name;
  this.cost = '$25';
};

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('Stephanie Hutchinson', 'simple'));
members.push(factory.createMember('Astrid Rice', 'standard'));
members.push(factory.createMember('Fabian Henry', 'super'));
members.push(factory.createMember('Saoirse Baker', 'simple'));

// console.log(members);

members.forEach(function (member) {
  member.define();
});
