const { findSubstr } = require("../04.js");

describe("findSubstr", () => {
  test("success", () => {
    expect(findSubstr("abwhatehwhwh", "what")).toBe(2);
    // expect(findSubstr("abwhatehwhwh", "where")).toBe(-1); //构造一个fail的例子 
  });

  test("fail", () => {
    // expect(findSubstr("abcd", "abc")).toBe(0);
    // expect(findSubstr("ababcd", "abc")).toBe(2); //构造一个fail的例子
    // expect(findSubstr("aabcdabcddefghijklmn", "abcd")).toBe(1);


    expect(findSubstr("mississippi", "issip")).toBe(4);
    // "mississippi"
    // ("issip");  
  });
});
