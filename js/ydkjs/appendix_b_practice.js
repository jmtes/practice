// PRACTICING COMPARISONS
/*
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
*/