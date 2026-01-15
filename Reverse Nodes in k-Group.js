class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        if (head == null || k == 1)
            return head;
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode prev = dummy;
        while (true) {
           ListNode curr = prev;
            for (int i = 0; i < k && curr != null; i++) {
                curr = curr.next;
            }
          if (curr == null)
                break;
            ListNode next = curr.next;
            ListNode start = prev.next;
            ListNode p = next;
            ListNode c = start;
            while (c != next) {
                ListNode temp = c.next;
                c.next = p;
                p = c;
                c = temp;
            }
             prev.next = curr;
            prev = start;
        }
return dummy.next;
    }
       
            

           

        
}
