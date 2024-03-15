// 234. 回文链表
// 给你一个单链表的头节点 head ，请你判断该链表是否为
// 回文链表
// 。如果是，返回 true ；否则，返回 false 。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

import { changeList, ListNode } from "../package/List.js";

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  head = changeList(head);
  let len = 1;
  let a = head;
  while (a.next) {
    a = a.next;
    len++;
  }
  debugger
  if (len == 1) return true;
  if (len == 2) return head.val == a.val;
  let loop = Math.floor(len / 2);
  let loop_ = loop
  let offset = len % 2;
  let nodeArr = [];
  let rNode = head;
  while (loop--) {
    nodeArr.push(rNode);
    rNode = rNode.next;
  }
  if (offset == 0) {
  } else {
    rNode = rNode.next;
  }
  let result = true;
  for (let i = loop_; i > 0; i--) {
    if (nodeArr[i - 1].val !== rNode.val) {
      result = false;
      break;
    } else {
      nodeArr.pop();
      rNode = rNode.next;
    }
  }
  return result;
};

let head = [1,2,2,1]
let result = isPalindrome(head);
console.log(result);
