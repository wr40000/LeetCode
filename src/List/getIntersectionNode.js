/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
import { changeList, ListNode } from "../package/List.js";

var getIntersectionNode = function (headA, headB) {
  let A = changeList(headA);
  let B = changeList(headB);
  let lenA = 1;
  let lenB = 1;
  let start;
  let temp = A;
  while (temp.next) {
    temp = temp.next;
    lenA++;
  }
  temp = B;
  while (temp.next) {
    temp = temp.next;
    lenB++;
  }
  start = Math.abs(lenA-lenB);
  if (lenA > lenB) {
    for (let i = 0; i < start; i++) {
      A = A.next;
    }
  }
  if (lenB > lenA) {
    for (let i = 0; i < start; i++) {
      B = B.next;
    }
  }
  let intersectVal;
for (let i = 0; i < Math.min(lenA,lenB); i++) {
    intersectVal = A;
    debugger
    while (A === B) {
        A = A.next;
        B = B.next;
        if (A.next) {
        return intersectVal;
      }
    }
    A = A.next;
    B = B.next;
  }
};

let listA = [4, 1, 8, 4, 5],
  listB = [5, 0, 1, 8, 4, 5];

let result = getIntersectionNode(listA, listB);
