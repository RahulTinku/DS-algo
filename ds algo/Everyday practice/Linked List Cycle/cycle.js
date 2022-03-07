/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let map = new Map();
  while (head) {
    if (!map.get(head)) {
      map.set(head, 1);
    } else {
      return true;
    }
    head = head.next;
  }
  return false;

  //  let r1 = head, r2 = head;
  // while (r1 && r1.next) {
  //     r1 = r1.next.next;
  //     r2 = r2.next;
  //     if (r1 == r2) {
  //         return true;
  //     }
  // }
  // return false;
};
