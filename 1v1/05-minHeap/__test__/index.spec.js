const { MinHeap } = require("../index.js");
function KthLargest(k, nums) {
  this.k = k;
  this.heap = new MinHeap();
  for (const node of nums) {
    this.add(node);
  }
}

KthLargest.prototype.add = function (node) {
  this.heap.push(node); //在push内部会做shift位置调整
  if (this.heap.size() > this.k) {
    // console.log(this.heap.all());
    this.heap.pop();
    // console.log(this.heap.all());
    // k个元素 ？
    let res = this.heap.peek();
    // console.log(res);
    return res;
  }
};

// let kth = new KthLargest(3, [4, 5, 8, 2]);
// console.log(kth.add(3));
// // console.log(kth.add(5));
// console.log(kth.add(10));
// console.log(kth.add(9));
// console.log(kth.add(4));

describe("MinHeap", () => {
  let kth = new KthLargest(3, [4, 5, 8, 2]);
  test("构建MinHeap实例", () => {
    expect(kth.heap.data).toEqual([4, 5, 8]);
  });
  test("添加数字3", () => {
    expect(kth.add(3)).toBe(4);
    expect(kth.add(3)).toBe(4);
  });
  test("添加数字5", () => {
    expect(kth.add(5)).toBe(5);
  });
  test("添加数字6", () => {
    expect(kth.add(6)).toBe(5);
  });
  test("添加数字7", () => {
    expect(kth.add(7)).toBe(6);
  });
});
