/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 同21
const mergeTwoLists = function (l1, l2) {
  const ans = new ListNode()
  let cur = ans
  while (l1 && l2) {
    if (l1.val >= l2.val) {
      cur.next = new ListNode(l2.val)
      l2 = l2.next
    }
    else {
      cur.next = new ListNode(l1.val)
      l1 = l1.next
    }
    cur = cur.next
  }

  if (l1)
    cur.next = l1
  if (l2)
    cur.next = l2
  return ans.next
}
