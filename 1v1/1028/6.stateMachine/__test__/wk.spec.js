const { parseNewLabel:parseHTML } = require("../wk.js");

describe("parse HTML", () => {
  test("normal node", () => {
    expect(parseHTML("  <div  ></div>")).toBe("div");
    // expect(parseHTML(" <div>  </div>")).toBe(true);
    // expect(parseHTML(" <div  >  </div >")).toBe(true);
    // expect(parseHTML(" < div  >  </div >")).toBe(false);
    // expect(parseHTML(" <div  >  < /div >")).toBe(false);
    // expect(parseHTML(" <div  >  </ div >")).toBe(false);
  });
  test("text node", () => {});
  // test("comment node", () => {});
  // test("CDATA node", () => {});
  // test("ProcessingInstruction node", () => {});
  // test("DocumentType node", () => {});
});
