// 19. 删除链表的倒数第 N 个结点
// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

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
  head = changeList(head);
  let l = head;
  let result = l;
  let r = head;
  let len = 0;
  let temp = n
  debugger;
  while (temp-- && r) {
    r = r.next;
    len++;
  }
  if (!r) {
    if (len == n) {
      return head.next;
    } else {
      return null;
    }
  }
  while (r.next) {
    len++;
    r = r.next;
    l = l.next;
  }
  l.next = l.next.next;
  return result;
};
let head = [1, 2];
let n = 2;
let result = removeNthFromEnd(head, n);
console.log(result);
