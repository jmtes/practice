const data = [
  {
    name: 'Charlotte MacArthur',
    age: 24,
    gender: 'Female',
    lookingfor: 'Either',
    location: 'Columbus OH',
    image: 'https://randomuser.me/api/portraits/women/9.jpg'
  },
  {
    name: 'Malia Frank',
    age: 26,
    gender: 'Female',
    lookingfor: 'Male',
    location: 'Birmingham AL',
    image: 'https://randomuser.me/api/portraits/women/6.jpg'
  },
  {
    name: 'Nadia Alden',
    age: 28,
    gender: 'Female',
    lookingfor: 'Female',
    location: 'Honolulu HI',
    image: 'https://randomuser.me/api/portraits/women/8.jpg'
  },
  {
    name: 'Allison Lucas',
    age: 22,
    gender: 'Female',
    lookingfor: 'Female',
    location: 'St Louis MO',
    image: 'https://randomuser.me/api/portraits/women/10.jpg'
  }
];

const profiles = profileIterator(data);

// Load first profile on page load
nextProfile();

// Next Button Event Listener
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile () {
  const currentProfile = profiles.next().value;

  if (currentProfile) {
    document.getElementById('profile-display').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
    `;

    document.getElementById('image-display').innerHTML = `
      <img src="${currentProfile.image}">
    `;
  } else {
    // No more profiles
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator (profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length ? {
        value: profiles[nextIndex++],
        done: false
      } : {
        done: true
      };
    }
  };
}
