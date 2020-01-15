// PRACTICING COMPARISONS
// /*
console.log('****** COMPARISON PRACTICE ******');
const dayStart = '07:30';
const dayEnd = '17:45';

function scheduleMeeting (startTime, durationMinutes) {
  // Extract meeting start hour and meeting start minutes from startTime
  var [, meetingStartHour, meetingStartMinutes] = startTime.match(/^(\d{1,2}):(\d{2})$/) || [];

  // Convert durationMinutes to a number just in case
  durationMinutes = Number(durationMinutes);

  if (typeof meetingStartHour === 'string' && typeof meetingStartMinutes === 'string') {
    // Convert minutes to hours
    const durationHours = Math.floor(durationMinutes / 60);
    // Get remaining minutes
    durationMinutes = durationMinutes - (durationHours * 60);
    let meetingEndHour = Number(meetingStartHour) + durationHours;
    let meetingEndMinutes = Number(meetingStartMinutes) + durationMinutes;

    // Account for meetingEndMinutes being past 60. If so, add an hour and subtract 60 from the minutes.
    if (meetingEndMinutes > 60) {
      meetingEndHour += 1;
      meetingEndMinutes -= 60;
    }

    // Make new strings
    const meetingStart = `${String(meetingStartHour).padStart(2, '0')}:${String(meetingStartMinutes).padStart(2, '0')}`;
    const meetingEnd = `${String(meetingEndHour).padStart(2, '0')}:${String(meetingEndMinutes).padStart(2, '0')}`;

    // Compare strings alphabetically
    console.log(meetingStart >= dayStart && meetingEnd <= dayEnd);
  } else {
    // If parameters weren't passed in properly
    console.log(false);
  }
}

scheduleMeeting('7:00', 15); // false
scheduleMeeting('07:15', 30); // false
scheduleMeeting('7:30', 30); // true
scheduleMeeting('11:30', 60); // true
scheduleMeeting('17:00', 45); // true
scheduleMeeting('17:30', 30); // false
scheduleMeeting('18:00', 15); // false
// */

// CLOSURE PRACTICE
console.log('****** CLOSURE PRACTICE ******');
/*
// THE SOLUTION I CAME UP WITH LOL
function range (start, end) {
  const nums = [start];
  let i = start + 1;
  if (typeof end !== 'undefined' && end >= start) {
    while (i <= end) {
      nums.push(i);
      i++;
    }
    return nums;
  } else if (end < start) {
    return [];
  } else {
    return function (end) {
      if (end >= start) {
        while (i <= end) {
          nums.push(i);
          i++;
        }
        return nums;
      } else {
        return [];
      }
    };
  }
}

*/

// COOL ELEGANT SUGGESTED SOLUTION
function range (start, end) {
  start = Number(start) || 0;

  if (end === undefined) {
    return function getEnd (end) {
      return getRange(start, end);
    };
  } else {
    end = Number(end) || 0;
    return getRange(start, end);
  }

  function getRange (start, end) {
    var ret = [];
    for (let i = start; i <= end; i++) {
      ret.push(i);
    }
    return ret;
  }
}

console.log(range(3, 3)); // [3]
console.log(range(3, 8)); // [3,4,5,6,7,8]
console.log(range(3, 0)); // []

var start3 = range(3);
var start4 = range(4);

console.log(start3(3)); // [3]
console.log(start3(8)); // [3,4,5,6,7,8]
console.log(start3(0)); // []

console.log(start4(6)); // [4,5,6]

// PROTOTYPE PRACTICE
console.log('****** PROTOTYPE PRACTICE ******');

function randMax (max) {
  return Math.trunc(1E9 * Math.random()) % max;
}

var reel = {
  symbols: ['♠', '♥', '♦', '♣', '☺', '★', '☾', '☀'],
  spin () {
    // Randomize a position for the reel
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
  },
  display () {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    return this.symbols[this.position];
  }
};

var slotMachine = {
  reels: [
    Object.create(reel),
    Object.create(reel),
    Object.create(reel)
  ],
  spin () {
    this.reels.forEach(function spinReel (reel) {
      reel.spin();
    });
  },
  display () {
    let r1 = this.reels[0].position;
    let r2 = this.reels[1].position;
    let r3 = this.reels[2].position;

    for (let i = 0; i < 3; i++) {
      // console.log(`Iteration ${i}`);
      console.log(`${reel.symbols[r1]} | ${reel.symbols[r2]} | ${reel.symbols[r3]}`);
      // console.log(r1 === 7 ? 0 : r1++);
      r1 === 7 ? r1 = 0 : r1++;
      // console.log(r1);
      r2 === 7 ? r2 = 0 : r2++;
      r3 === 7 ? r3 = 0 : r3++;
    }
  }
};

// console.log(reel.symbols.indexOf(slotMachine.reels[0].display()));
// console.log(slotMachine.reels[0].position);
// console.log(slotMachine.reels[0].display());

console.log('FIRST SPIN!!!');
slotMachine.spin();
slotMachine.display();
// ☾ | ☀ | ★
// ☀ | ♠ | ☾
// ♠ | ♥ | ☀

console.log('SECOND SPIN!!!');
slotMachine.spin();
slotMachine.display();
// ♦ | ♠ | ♣
// ♣ | ♥ | ☺
// ☺ | ♦ | ★
