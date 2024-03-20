export function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

export function arrayToTree(arr) {
  if (arr.length === 0) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (i < arr.length) {
    const currentNode = queue.shift();

    const leftVal = arr[i++];
    if (leftVal !== null && leftVal !== undefined) {
      const leftNode = new TreeNode(leftVal);
      currentNode.left = leftNode;
      queue.push(leftNode);
    }

    const rightVal = arr[i++];
    if (rightVal !== null && rightVal !== undefined) {
      const rightNode = new TreeNode(rightVal);
      currentNode.right = rightNode;
      queue.push(rightNode);
    }
  }

  return root;
}
