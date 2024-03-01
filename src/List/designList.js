class MyLinkedList {
  val;
  next = null;
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let cur = this;
  for (let i = 0; i < index; i++) {
    if (cur.next) {
      cur = cur.next;
    } else {
      return -1;
    }
  }
  return cur.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.addAtIndex(0, val);
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  if (!this.val) {
    this.val = val;
    return;
  }
  let lastNode = this;
  while (lastNode.next) {
    lastNode = lastNode.next;
  }
  let newNode = new MyLinkedList(val, null);
  lastNode.next = newNode;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let cur = this;
  if (index === 0) {
    if (!this.val && this.val !== 0) {
      this.val = val;
      return;
    }
    let oldHeadVal = this.val;
    let newNode = new MyLinkedList(oldHeadVal, this.next);
    this.val = val;
    this.next = newNode;
  }
  while (--index && cur.next) {
    cur = cur.next;
  }
  if (index == 0 && cur.next) {
    let curNextNode = cur.next;
    let newNode = new MyLinkedList(val, curNextNode);
    cur.next = newNode;
  }
  if (index == 0 && !cur.next) {
    let newNode = new MyLinkedList(val, null);
    cur.next = newNode;
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let cur = this;
  if (index === 0) {
    this.val = this.next ? this.next.val : undefined;
    this.next = cur.next ? cur.next.next : null;
    return;
  }
  while (--index && cur.next) {
    cur = cur.next;
  }
  if (index === 0 && cur.next) {
    // 中间删除
    cur.next = cur.next.next;
  }
  if (index === 0 && !cur.next) {
    // 末尾删除
    cur.next = null;
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

// let methods = [
//   "MyLinkedList",
//   "addAtHead", // 7
//   "addAtHead", // 2
//   "addAtHead", // 1    1 2 7
//   "addAtIndex", // 3 0    1 2 7 0
//   "deleteAtIndex", // 2    1 2 0
//   "addAtHead", // 6    6 1 2 0
//   "addAtTail", // 4     6 1 2 0 4
//   "get", // 4
//   "addAtHead", // 4       4 6 1 2 0 4
//   "addAtIndex", // 5 0    4 6 1 2 0 0 4
//   "addAtHead", // 6       6 4 6 1 2 0 0 4
// ];

// let attr = [[], [7], [2], [1], [3, 0], [2], [6], [4], [4], [4], [5, 0], [6]];
// let methods = [
//   "MyLinkedList",
//   "addAtHead", // 7   7
//   "addAtTail", // 7    77
//   "addAtHead", // 9    977
//   "addAtTail", // 8    9778
//   "addAtHead", //  6   69778
//   "addAtHead", // 0    069778
//   "get", //       5
//   "addAtHead", // 0    0069778
//   "get", // 2
//   "get", //  5
//   "addAtTail", // 4    00697784
// ];

// let attr = [[], [7], [7], [9], [8], [6], [0], [5], [0], [2], [5], [4]];
let methods = ["MyLinkedList", "addAtTail", "get"];

let attr = [[], [1], [0]];
// let methods = [
//   "MyLinkedList",
//   "addAtHead",  //  1           1
//   "addAtTail",  //  3           13
//   "addAtIndex",  //  1 2        123
//   "get",  //        1
//   "deleteAtIndex",  // 1       13
//   "get",  //          1
// ];
// let attr = [[], [1], [3], [1, 2], [1], [1], [1]];
// let methods = [
//   "MyLinkedList",
//   "addAtHead",  //    7        7
//   "addAtHead",  //     2       27
//   "addAtHead",  //     1       127
//   "addAtIndex",  //     3 0    1270
//   "deleteAtIndex",  //  2      120
//   "addAtHead",  //     6        6120
//   "addAtTail",  //     4        61204
//   "get",  //          4
//   "addAtHead",  //     4        461204
//   "addAtIndex",  //     5 0     4612004
//   "addAtHead",  //     6        64612004
// ];
// let attr = [[], [7], [2], [1], [3, 0], [2], [6], [4], [4], [4], [5, 0], [6]];

myLinkedList = new MyLinkedList();
methods.map((method, index) => {
  if (index > 0) {
    // if(index == attr.length - 1)
    // if (index == 8) {
    //   debugger;
    // }
    myLinkedList[method](...attr[index]);
    debugger;
  }
  console.log(index);
});

console.log(myLinkedList);
