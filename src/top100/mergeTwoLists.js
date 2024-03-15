// 21. 合并两个有序链表
// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的
// 两个链表的所有节点组成的。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

import { changeList, ListNode } from "../package/List.js";

var mergeTwoLists = function (list1, list2) {
  list1 = changeList(list1);
  list2 = changeList(list2);
  if (!list1 && !list2) return [];
  if (!list1) return list2;
  if (!list2) return list1;
  let result = new ListNode(0);
  let output = result;
  while (list1 || list2) {
    debugger;
    if (!list1) {
      result.next = new ListNode(list2.val);
      list2 = list2.next;
      result = result.next;
      continue;
    }
    if (!list2) {
      result.next = new ListNode(list1.val);
      list1 = list1.next;
      result = result.next;
      continue;
    }
    if (!list2 && !list1) break;
    if (list1.val > list2.val) {
      result.next = new ListNode(list2.val);
      list2 = list2.next;
    } else if (list1.val < list2.val) {
      result.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      result.next = new ListNode(list1.val);
      list1 = list1.next;
    }
    result = result.next;
  }
  return output.next;
};

let list1 = [-9,3]
let list2 = [5,7]
let result = mergeTwoLists(list1, list2);
console.log(result);
