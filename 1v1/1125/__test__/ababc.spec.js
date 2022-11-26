const { finsStr } = require("../ababc.js");

describe("测试ababc.js", () => {
  test("`ababc`例子：成功", () => {
    expect(finsStr("abababcde", "ababc")).toBe(2);
  });
  // test("非`ababc`案例，失败：", () => {
  //   expect(finsStr("012what0000", "what")).toBe(3);
  // });
});
