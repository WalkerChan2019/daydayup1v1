const { findStr } = require("../abc.js");

describe("测试abc.js：", () => {
  test("source非重复，pattern非重复，成功：", () => {
    expect(findStr("xyzabc000", "abc")).toBe(3);
  });
  // test("source重复，pattern非重复，失败：", () => {
  //   expect(findStr("ababc000", "abc")).toBe(2);
  // });
  // test("重复，失败：", () => {
  //   expect(findStr("abababcde", "ababc")).toBe(2);
  // });
  // test("非abc，失败：", () => {
  //   expect(findStr("012what0000", "what")).toBe(3);
  // });
});
