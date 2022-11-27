const { MinHeap } = require("../index.js");

describe("shiftDown_gao", () => {
  test("true", () => {
    expect(true).toBe(true);
  });

  let heap = MinHeap.generateInstance(3, [4, 5, 8, 2]);
  test("测试all", () => {
    expect(heap.all()).toEqual([4, 5, 8]);
  });
  test("测试add", () => {
    expect(heap.add(3)).toBe(4);
  });
  test("测试add", () => {
    heap.add(5);
    expect(heap.all()).toEqual([5, 5, 8]);
  });
  test("测试shiftDown", () => {
    // console.log(heap.all());
    heap.data = [10, 5, 8];
    // console.log(heap.all());
    expect(heap.shiftDown(10, 0)).toEqual([5, 10, 8]);
    heap.data = [10, 5, 8, 2, 3, 4, 5];
    expect(heap.shiftDown(10, 0)).toEqual([5, 2, 8, 10, 3, 4, 5]);
    //    10
    //  5    8
    //2  3  4  5
    //    5
    //  2    8
    //10  3  4  5
  });
});
