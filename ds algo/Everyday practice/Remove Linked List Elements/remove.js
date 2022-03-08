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
var removeElements = function (head, val) {
  // const myNode = {val : -1, next: null};
  // let final = myNode;
  //  let last = head.next;
  // while(head){
  //     if(last.val === val){
  //         head.next = head.next.next;
  //     }else{
  //         final.next = head;
  //         head = head.next;
  //     }
  //     console.log(final)
  // }
  // return final.next;

  //      let h=new ListNode(-1);
  //     h.next=head;
  //     head=h;
  //     while(h.next!==null){
  //         if(h.next.val===val){
  //             h.next=h.next.next;
  //         }
  //         else{
  //             h=h.next;
  //         }
  //     }
  //     return head.next;

  if (!head) return head;
  while (head && head.val == val) {
    head = head.next;
  }
  //console.log(head)
  let node = head;
  let prv = null;
  while (node) {
    const next = node.next;
    if (node.val === val) {
      prv.next = next;
    } else {
      prv = node;
    }
    node = next;
  }
  return head;
};
