const alternatingCharacters = require("./alternatingCharacters");

describe("Testing alternating characters algorithm", () => {
  test("Should return 2", () => {
    const char = "AABAAB";
    expect(alternatingCharacters(char)).toBe(2);
  });

  test("Should return 0", () => {
    const char = "ABABABAB";
    expect(alternatingCharacters(char)).toBe(0);
  });

  test("Should return 7", () => {
    const char = "ABABABABAABBABAABABBABABBBB";
    expect(alternatingCharacters(char)).toBe(7);
  });
});
