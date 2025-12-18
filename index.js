// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === "0:00") {
    return "midnight";
  } else if (time === "12:00") {
    return "midday";
  } else {
    const [hour, minutes] = time.split(":");

    const timeRecord = {
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen",
      20: "twenty",
      21: "twenty one",
      22: "twenty two",
      23: "twenty three",
      24: "twenty four",
      25: "twenty five",
      26: "twenty six",
      27: "twenty seven",
      28: "twenty eight",
      29: "twenty nine",
      30: "half",
    };

    const hourString = timeRecord[hour];

    if (minutes == "00") {
      return `${hourString} o'clock`;
    } else {
      if (Number(minutes) <= 30) {
        if (minutes == "15") {
          return `quarter past ${timeRecord[hour]}`;
        }

        return `${timeRecord[Number(minutes)]} past ${timeRecord[hour]}`;
      } else {
        const remaingTime = 60 - Number(minutes);

        if (remaingTime == 15) {
          return `quarter to ${timeRecord[Number(hour) + 1]}`;
        }

        return `${timeRecord[remaingTime]} to ${timeRecord[Number(hour) + 1]}`;
      }
    }
  }
}

module.exports = { convertTimeToWords };
