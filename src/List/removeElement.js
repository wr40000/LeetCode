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

import {changeList, ListNode} from '../package/List.js'

var removeElements = function (head, val) {
  if (head.length == 0) return [];
  head = changeList(head);
  let vilHead = new ListNode(0, head);
  let ret = vilHead;
  while (vilHead.next) {
    if(vilHead.next.val === val) {
      vilHead.next = vilHead.next.next;
      continue;
    }
    vilHead = vilHead.next ? vilHead.next : null;
  }
  let newList = [];
  while (ret.next) {
    newList.push(ret.next.val);
    ret = ret.next;
  }
  return newList;
};

let head = [7,7,7,7];
let val = 7;

let result = removeElements(head, val);
console.log(result);
