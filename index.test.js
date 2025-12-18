const { convertTimeToWords } = require("./index");

describe("Time to words", () => {
  it("Handles midnight", () => {
    const timeInWords = convertTimeToWords("0:00");
    expect(timeInWords).toBe("midnight");
  });

  it("Handles midday", () => {
    const timeInWords = convertTimeToWords("12:00");
    expect(timeInWords).toBe("midday");
  });

  it("2:00", () => {
    const timeInWords = convertTimeToWords("2:00");
    expect(timeInWords).toBe("two o'clock");
  });

  it("2:03", () => {
    const timeInWords = convertTimeToWords("2:03");
    expect(timeInWords).toBe("three past two");
  });

  it("2:33", () => {
    const timeInWords = convertTimeToWords("2:33");
    expect(timeInWords).toBe("twenty seven to three");
  });

  it("2:45", () => {
    const timeInWords = convertTimeToWords("2:45");
    expect(timeInWords).toBe("quarter to three");
  });

  it("Handles 30 - 8:30", () => {
    const timeInWords = convertTimeToWords("8:30");
    expect(timeInWords).toBe("half past eight");
  });

  it("8:15", () => {
    const timeInWords = convertTimeToWords("8:15");
    expect(timeInWords).toBe("quarter past eight");
  });

  it("Handles times after 30 mins - 2:45", () => {
    const timeInWords = convertTimeToWords("2:45");
    expect(timeInWords).toBe("quarter to three");
  });

  it("Throws error for invalid time format", () => {
    expect(() => {
      convertTimeToWords("2-30");
    }).toThrow("Invalid time format");
  });

  it("Throws error for impossible hour", () => {
    expect(() => {
      convertTimeToWords("13:00");
    }).toThrow("Invalid time value");
  });
});
