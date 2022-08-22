/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 */

function ListNode(val, next) {
  this.val = val ? val : 0;
  this.next = next ? next : undefined;
}

function createNewList(num) {
  let node = new ListNode();
  let curr = node;
  for (let i = 0; i < num.length; i++) {
    curr.next = new ListNode(num[i]);
    curr = curr.next;
  }
  return node.next;
}

const head = createNewList([1, 2, 3, 4, 5]);
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  /**
     create new linkedlist, add head.next to newlist
    */
  let prev = null;
  let curr = head;
  while (curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
};

console.log(reverseList(head));
