// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足
//  Node.val == val 的节点，并返回 新的头节点

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

import { changeList, ListNode } from "../../package/List.js";

var removeElements = function (head, val) {
  head = new ListNode(0, changeList(head));
  debugger
  let result = head;
  let node = head.next ? head.next : null;
  while (node) {
    while(node.val !== val){
      if(!node.next) return result.next
      node = node.next;
      head = head.next;
    }
    head.next = node.next ? node.next : null
    node = node.next;
  }
  return result.next
};

let head = [1];
let val = 2;

let result = removeElements(head, val);
console.log(result);
