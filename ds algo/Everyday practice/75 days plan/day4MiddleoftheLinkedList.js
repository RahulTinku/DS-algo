/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let middleNode = function (head) {
  /** Loop in list and increase the count,
    again traverse and return when index == count
    */
  let curr = head,
    prev = head,
    count = 0;
  while (curr) {
    count++;
    curr = curr.next;
  }
  console.log(count, head);
  for (let i = 0; i <= count; i++) {
    if (i === Math.floor(count / 2)) {
      break;
    } else {
      prev = prev.next;
    }
  }
  return prev;
};
