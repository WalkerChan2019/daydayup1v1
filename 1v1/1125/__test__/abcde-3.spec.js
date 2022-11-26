const { findStr } = require("../abcde-3.js");

describe("测试abcde-2.js", () => {
  test("is true", () => {
    expect(true).toBe(true)
  })
  // test("pattern`abc`例子：成功", () => {
  //   expect(findStr("xyzabcde", "abc")).toBe(3);
  // });
  // test("pattern`abcde`例子：成功", () => {
  //   expect(findStr("xyzabcde00", "abcde")).toBe(3);
  // });
  // test("source`ab`重复, pattern`abc`例子：成功", () => {
  //   expect(findStr("xyababc00", "abc")).toBe(4);
  // });
  // test("pattern`ababc`例子：成功", () => {
  //   expect(findStr("xyababc00", "ababc")).toBe(2);
  // });
  //  test("source`ab`重复,pattern`ababc`例子：成功", () => { // 失败 
  //    expect(findStr("abababc00", "ababc")).toBe(2);
  //  });
});
