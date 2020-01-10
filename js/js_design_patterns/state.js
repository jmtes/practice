// The state pattern is another behavioral type pattern and is reminiscent of how state managers like Redux work.

// The idea is that there's a state that we can change throughout our scripts, so if we want to do certain things on certain states or display certain content, we can do that.

// In this example, we have a page with different navigation links (home, about, and contact), each one a state. We will display different content depending on the state we're in.

const PageState = function () {
  let currentState = new HomeState(this);

  this.init = function () {
    this.change(new HomeState());
  };

  this.change = function (state) {
    currentState = state;
  };
};

// Home state
const HomeState = function () {
  document.getElementById('heading').textContent = null;
  document.getElementById('content').innerHTML = `
    <div class="jumbotron">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
  `;
};

// About state
const AboutState = function () {
  document.getElementById('heading').textContent = 'About Us';
  document.getElementById('content').innerHTML = `
    <p>This is the about page.</p>
  `;
};

// Contact state
const ContactState = function () {
  document.getElementById('heading').textContent = 'Contact Us';
  document.getElementById('content').innerHTML = `
    <form>
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `;
};

// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();

// UI variables
const home = document.getElementById('home');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

// Event listeners
home.addEventListener('click', (event) => {
  page.change(new HomeState());

  event.preventDefault();
});

about.addEventListener('click', (event) => {
  page.change(new AboutState());

  event.preventDefault();
});

contact.addEventListener('click', (event) => {
  page.change(new ContactState());

  event.preventDefault();
});

// This isn't a practical example because no dynamic content is being served. Usually you'd have an edit state, a list state, etc.
