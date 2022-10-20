const {walk} = require("../walk");


describe("walk", () => {
  test("AST语法树", () => {
    const ast = {
     a:1,
     b:[1,2],
     c:10
    };
    const mockEnter = jest.fn();
    const mockLeave = jest.fn();
   
    walk(ast, {
      enter: mockEnter,
      leave: mockLeave
    });
    let calls = mockEnter.mock.calls; // []
    expect(calls.length).toBe(2);
    console.log(calls);
    // expect(calls[0][0]).toEqual({
    //   a:1
    // })
    // expect(calls[0][0]).toEqual(ast);

    // calls = mockLeave.mock.calls;
    expect(calls.length).toBe(2);
    // expect(calls[0][0]).toEqual({
    //   a:1
    // })

  });

  test("数组节点", () => {
    const ast = {
      // a: 1,
      // children: [{ wk: [] }]
      // a: [{b:"2"}, { b: 2, c: 1 }] //发现问题 
      // a: [{b:[]}, { b: 2, c: 1 }]
      // a: [{ b: 2, c: 1 }]
      // a: [{b:[]}]
      a: [{b:"2"}]
    };
    // const ast=[{a:1}]
    const mockEnter = jest.fn();
    const mockLeave = jest.fn();

    walk(ast, {
      enter: mockEnter,
      leave: mockLeave,
    });
    let calls = mockEnter.mock.calls;

    console.log(calls);
    expect(calls.length).toBe(3);
    expect(calls[0][0]).toEqual({ a: [{ b: "2" }] });
    expect(calls[1][0]).toEqual([{ b: "2" }]);
    expect(calls[2][0]).toEqual({ b: "2" });

    calls = mockLeave.mock.calls;

    expect(calls.length).toBe(3);
    expect(calls[0][0]).toEqual({ b: "2" });
    expect(calls[1][0]).toEqual([{ b: "2" }]);
    expect(calls[2][0]).toEqual({ a: [{ b: "2" }] });
  });


});

