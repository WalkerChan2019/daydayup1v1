
const { wkKmp3 } = require("../kmp.js")


describe("test kmp", () => {
  test("abbab", () => {
    expect(wkKmp3("abbab").equalTo([0, 0, 0, 0, 1, 2]));
  });
})