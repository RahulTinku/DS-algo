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
  let hi = head,
    count = 1;
  while (hi.next) {
    hi = hi.next;
    count++;
  }
  count = parseInt(count / 2);

  while (count) {
    head = head.next;
    count--;
  }
  return head;
};

// let slow = head;
// let fast = head;
// while (fast !== null && fast.next !== null) {
//     fast = fast.next;
//     slow = slow.next;
//     if (fast === null) {
//         break;
//     } else {
//         fast = fast.next;
//     }
//     // console.log(slow)
//     // console.log(fast)
// }
// return slow;
