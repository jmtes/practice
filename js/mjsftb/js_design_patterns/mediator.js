// The mediator pattern, like the observer pattern, is a behavioral pattern. The idea is to have a mediator, which is basically an interface for communication between what are called colleagues, which are just mediated objects.

// The best example for when a mediator pattern would be put into place is a chatroom.

// BASIC STRUCTURE OF THE MEDIATOR PATTERN

// In this example, the chatroom is the mediator and the users are the colleagues of the chatroom.
class User {
  constructor (name) {
    this.name = name;
    this.chatroom = null;
  }

  send (message, to) {
    this.chatroom.send(message, this, to);
  }

  receive (message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

class Chatroom {
  constructor () {
    const users = {}; // List of users

    return {
      register: function (user) {
        users[user.name] = user;
        user.chatroom = this;
      },
      send: function (message, from, to) {
        if (to) {
          // Single user message
          to.receive(message, from);
        } else {
          // Mass message
          for (var key in users) {
            if (users[key] !== from) {
              users[key].receive(message, from);
            }
          }
        }
      }
    };
  }
}

const stan = new User('Stan');
const nahid = new User('Nahid');
const isabel = new User('Isabel');

const chatroom = new Chatroom();

chatroom.register(stan);
chatroom.register(nahid);
chatroom.register(isabel);

stan.send('hello nahid', nahid);
isabel.send('stan ur name has been ruined by twitter and im so sorry', stan);
nahid.send('hi everyone');
