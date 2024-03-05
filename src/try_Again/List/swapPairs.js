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

import { changeList, ListNode } from "../../package/List.js";

var swapPairs = function (head) {
  head = new ListNode(0, changeList(head));
  let temp = head;
  let pre;
  let cur;
  while (temp.next && temp.next.next) {
    pre = temp.next;
    cur = temp.next.next;
    pre.next = cur.next;
    cur.next = pre;
    temp.next = cur;
    temp = pre
  }
  return head.next;
};

let head = [1, 2, 3, 4];
let result = swapPairs(head);
console.log(result);
