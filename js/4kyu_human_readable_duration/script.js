// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.


function formatDuration(duration) {
  let minute = 60,
      hour   = 3600,
      day    = 86400,
      year   = 3153600;

  let components = {
    "totalYears"   : 0,
    "totalDays"    : 0,
    "totalHours"   : 0,
    "totalMinutes" : 0,
    "totalSeconds" : 0
  }

  let remainder = 0;
  
  if (duration === 0) return "now";

  // calculate the total of each component for the output string
  function calc(component, total) {
    if (duration >= component) {
      if (remainder) {
        components[total] = Math.floor(remainder / component);
        remainder = remainder % component;
      } else {
        components[total] = Math.floor(duration / component);
        remainder = duration % component;
      }
    }
    //return console.log(total, components[total], remainder);
  }
  
  // return a formatted substring for each component for the output string
  function format() {
    let formattedString = "";

    for (component in components) {
      let label = "";
      if (components[component] > 0) {
        if (components[component] === 1) { label = "" }
      };
    };
  }
  
  calc(year, "totalYears");
  calc(day, "totalDays");
  calc(hour, "totalHours");
  calc(minute, "totalMinutes");
  components["totalSeconds"] = remainder;

  format();

  return console.log(components);
}

//formatDuration(3962);
formatDuration(128);