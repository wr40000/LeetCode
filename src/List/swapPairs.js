/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

import { changeList, ListNode } from "../package/List.js";

var swapPairs = function (head) {
  head = changeList(head);
  let ret = new ListNode(0, head);
  let temp = ret;
  debugger;
  while (temp.next && temp.next.next) {
    let pre = temp.next;
    let cur = temp.next.next;
    pre.next = cur.next; // 这一步会使 ret链表暂时失去 2节点
    cur.next = pre;
    temp.next = cur; // 这一步是让头指针再重新指向 之前失去的二节点,
    temp = pre;
  }
  return ret.next;
};

let head = [1, 2, 3, 4];
let result = swapPairs(head);
console.log(result);
