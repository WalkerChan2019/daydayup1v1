const { findSubstr } = require("../tesla.js");

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

  test("pattern`abc`例子：成功", () => {
    expect(findSubstr("xyzabcde", "abc")).toBe(3);
  });
  test("pattern`abcde`例子：成功", () => {
    expect(findSubstr("xyzabcde00", "abcde")).toBe(3);
  });
  test("source`ab`重复, pattern`abc`例子：成功", () => {
    expect(findSubstr("xyababc00", "abc")).toBe(4);
  });
  test("pattern`ababc`例子：成功", () => {
    expect(findSubstr("xyababc00", "ababc")).toBe(2);
  });
   test("source`ab`重复,pattern`ababc`例子：成功", () => { // 失败 
     expect(findSubstr("abababc00", "ababc")).toBe(2);
   });
});
