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
import { changeList, ListNode } from "../../package/List.js";

var removeNthFromEnd = function (head, n) {
  head = new ListNode(0, changeList(head));
  let node = head;
  for (let i = 0; i < n - 1; i++) {
    if (!node) return head.next;
    node = node.next ? node.next : null;
  }
  // debugger
  let temp = head;
  let del = node.next ? node.next : null;
  while(del && del.next){
    temp = temp.next;
    del = del.next ? del.next : null;
  }
  temp.next = temp.next.next
  
  return head.next
};

let head = [1, 2, 3, 4, 5];
let result = removeNthFromEnd(head, 2);
console.log(result);
