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

var reverseList = function (head) {
  head = changeList(head);
  let pre = null;
  let cur = head ? head : null;
  let temp;
  while(cur){
    temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp
  }
  return pre
};

let head = [1, 2, 3, 4, 5];
let result = reverseList(head);
