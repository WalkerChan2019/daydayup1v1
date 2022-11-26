class MinHeap {
  constructor() {
    this.data = [];
  }
  size() {
    return this.data.length;
  }
  all() {
    return this.data;
  }
  peek() {
    //获取堆顶最小值
    return this.size() === 0 ? null : this.data[0];
  }
  compare(a, b) {
    return a - b;
  }
  swap(m, n) {
    //互换
    [this.data[m], this.data[n]] = [this.data[n], this.data[m]];
  }
  pop() {
    // 从堆顶抛出元素
    if (this.size() === 0) return null;
    const last = this.data.pop();
    // console.log("last:", last);
    if (this.size() !== 0) {
      this.data[0] = last; //把堆底元素直接放到堆顶
      this.shiftDown(last, 0); //再往下对比
    }
  }
  push(node) {
    //从堆底添加元素
    this.data.push(node);
    this.shiftUp(node, this.size() - 1);
  }
  shiftUp(node, i) {
    let index = i;
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      const parent = this.data[parentIndex];
      if (node < parent) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  shiftDown(node, i) {
    let index = i;
    const len = this.size();
    const halfLen = len >> 1;

    while (index < halfLen) {
      let leftIndex = (index + 1) * 2 - 1;
      let rightIndex = leftIndex + 1;

      let left = this.data[leftIndex];
      let right = this.data[rightIndex];

      if (this.compare(left, node) < 0) {
        // left < parent
        if (rightIndex < len && this.compare(right, left) < 0) {
          //right存在，且right<left,那么直接互换right和parent
          this.swap(rightIndex, index);
          index = rightIndex;
        } else {
          //right不存在，或者存在，但是right>left,那么直接互换left和parent
          this.swap(leftIndex, index);
          index = leftIndex;
        }
      } else if (rightIndex < len && this.compare(right, node) < 0) {
        // left > parent,并且right存在,就比较right和parent,如果parent>right,就互换
        this.swap(rightIndex, index);
        index = rightIndex;
      } else {
        // parnent最小
        // return;
        break;
      }
    }
  }

  shiftDown_gao(node, i) {
    let index = i;
    const len = this.size();
    const halfLen = len >> 1; //halfLen干嘛的？ ----> 倒数第二层的index是最底的一半

    while (index < halfLen) {
      let leftIndex = (index + 1) * 2 - 1;
      let rightIndex = leftIndex + 1;

      let left = this.data[leftIndex];
      let right = this.data[rightIndex];

      // todo 比较parent与left与right的大小
      // 如果parent不是最小的，那就比较left和right谁最小，然后把最小的和parent交换位置
      // 如果parent是最小的，那就停止
      if (this.compare(left, node) < 0) {
        // left < parent
        // 为了保证根节点最小，比较left和right
        if (rightIndex < len && this.compare(right, left) < 0) {
          // right<left, right是最小的，交换parent和right
          // heap[index] = right;
          // heap[rightIndex] = node;
          this.swap(rightIndex, index);
          index = rightIndex;
        } else {
          // right>left, left是最小的，交换parent和left
          // heap[index] = left;
          // heap[leftIndex] = node;
          this.swap(leftIndex, index);
          index = leftIndex;
        }
      } else if (rightIndex < len && this.compare(right, node) < 0) {
        // left > parent
        //   检查right, right<parent
        // heap[index] = right;
        // heap[rightIndex] = node;
        this.swap(rightIndex, index);
        index = rightIndex;
      } else {
        // parnent最小
        // return;
        break;
      }
    }
  }
}


module.exports = { MinHeap };

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
    console.log(this.heap.all());
    this.heap.pop();
    console.log(this.heap.all());
    // k个元素 ？
    let res = this.heap.peek();
    console.log(res);
    return res;
  }
};

let kth = new KthLargest(3, [4, 5, 8, 2]);
console.log(kth.add(3));
// console.log(kth.add(5));
console.log(kth.add(10));
console.log(kth.add(9));
console.log(kth.add(4));

// let kth = new KthLargest(3, [4, 5, 8, 2, 3, 5, 10, 9, 4]); //有误

// let kth = new KthLargest(3, [4, 5, 8, 2]);
// console.log(kth.add(3));
// console.log(kth.add(5));
// console.log(kth.add(10));
// console.log(kth.add(9));
// console.log(kth.add(4));

// ==========> js脚本/ node 如何调试？


