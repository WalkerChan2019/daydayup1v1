const { checkDec } = require("../walker");

describe("检测有效浮点数（float类型）", () => {
  test("12.123", () => {
    expect(checkDec("12.123")).toBe(true);
  });
  test("12.", () => {
    expect(checkDec("12.")).toBe(true);
  });
  test("12.12.12", () => {
    expect(checkDec("12.12.12")).toBe(false);
  });
  test("0.12", () => {
    expect(checkDec("0.12")).toBe(true);
  });
  test("0.", () => {
    expect(checkDec("0.")).toBe(true);
  });
});
