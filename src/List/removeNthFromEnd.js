/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
import { changeList, ListNode } from "../package/List.js";

var removeNthFromEnd = function (head, n) {
  let node = new ListNode(0, changeList(head));
  let fast = node.next;
  let slow = node;
  let temp;

  //   将slow和fast拉开 n + 1的距离
  while (--n) {
    if (fast.next) {
      fast = fast.next;
    } else {
      return node;
    }
  }

  // 将slow拉到要删除元素的前一个节点
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  //   删除
  slow.next = slow.next.next;
  debugger;
  return node.next;
};

let head = [1, 2, 3, 4, 5];
let result = removeNthFromEnd(head, 2);
