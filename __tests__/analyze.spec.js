const analyse = require("../analyze");
const ast = require("../ast");

describe("analyze", () => {
  test("-----", () => {
    const {root,scopeAll} = analyse(ast); //ast
    // console.log(root);
    // console.log(scopeAll);

    expect(root.findDefiningScope("a")).toBe(root);
    expect(root.findDefiningScope("b")).toBe(root);

    const c=scopeAll[1]
    expect(c.findDefiningScope('d')).toBe(c)
  });
});
