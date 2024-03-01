export class ListNode {
  val;
  next = null;
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

export const changeList = (array) => {
  let nodeArray = [];
  for (let i = 0; i < array.length; i++) {
    let node = new ListNode(array[i], null);
    nodeArray.push(node);
  }
  for (let i = 0; i < array.length - 1; i++) {
    nodeArray[i].next = nodeArray[i + 1];
  }
  return nodeArray[0];
};
