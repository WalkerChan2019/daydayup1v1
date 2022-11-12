const { findSubstr } = require("../02.js");

describe("findSubstr", () => {
  test("success", () => {
    expect(findSubstr("abwhatehwhwh", "what")).toBe(2);
    // expect(findSubstr("abwhatehwhwh", "where")).toBe(-1); //构造一个fail的例子 
  });

  test("fail", () => {
    expect(findSubstr("abcd", "abc")).toBe(0);
    expect(findSubstr("ababcd", "abc")).toBe(2); //构造一个fail的例子
  });
});
