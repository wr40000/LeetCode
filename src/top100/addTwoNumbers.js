// 2. 两数相加
// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方
// 式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

import { changeList, ListNode } from "../package/List.js";

var addTwoNumbers = function (l1, l2) {
  l1 = changeList(l1);
  l2 = changeList(l2);
  let result = new ListNode(0);
  let output = result;
  let temp = 0;
  while (l1 || l2) {
    debugger;
    temp = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + temp;
    let val = temp % 10;
    temp = Math.floor(temp / 10);
    result.next = new ListNode(val);
    result = result.next;
    l2 = l2 ? l2.next : null;
    l1 = l1 ? l1.next : null;
  }
  if (temp == 1) {
    result.next = new ListNode(temp);
  }
  return output.next;
};

let list1 = [9, 9, 9, 9, 9, 9, 9];
let list2 = [9, 9, 9, 9];
let result = addTwoNumbers(list1, list2);
console.log(result);
