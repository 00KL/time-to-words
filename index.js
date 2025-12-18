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

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  if (time === "0:00") return "midnight";

  if (time === "12:00") return "midday";

  const match = /^(\d{1,2}):(\d{2})$/.exec(time);
  if (!match) {
    throw new Error("Invalid time format. Expected H:MM or HH:MM");
  }

  const hour = Number(match[1]);
  const minutes = Number(match[2]);

  if (hour < 0 || hour > 12 || minutes < 0 || minutes > 59) {
    throw new Error("Invalid time value");
  }

  if (minutes === 0) {
    return `${timeRecord[hour]} o'clock`;
  }

  if (minutes <= 30 && minutes === 15) {
    return `quarter past ${timeRecord[hour]}`;
  }

  if (minutes <= 30) {
    return `${timeRecord[minutes]} past ${timeRecord[hour]}`;
  }

  const remainingTime = 60 - minutes;

  if (remainingTime === 15) {
    return `quarter to ${timeRecord[hour + 1]}`;
  }

  return `${timeRecord[remainingTime]} to ${timeRecord[hour + 1]}`;
}

module.exports = { convertTimeToWords };
