class Node{
  constructor(value, next){
    this.value = value
    this.next = null
  }
}

const detectCycle = function(head) {
  let cycleLength = 0;
  
  let slow = head,
      fast = head
  
  while(fast !== null && fast.next !== null){
      slow = slow.next
      fast = fast.next.next
      
      if(slow === fast) {
          cycleLength = findCycleLength(slow)
          break;
      }
  }
  
  return findStartOfCycle(head, cycleLength)
};


function findCycleLength(slow){
  let current = slow,
      cycleLength = 0
  while(true){
      current = current.next
      cycleLength++
      if(current === slow) break
  }
  return cycleLength
}


function findStartOfCycle(head, cycleLength){
  let pointer1 = head,
      pointer2 = head,
      index = 0

  
  while(cycleLength > 0){
      pointer2 = pointer2.next
      cycleLength--
  }
  
  while(pointer1 !== pointer2){
      pointer1 = pointer1.next
      index++
      pointer2 = pointer2.next
  }
  return `${pointer1.value} and index is ${index}`
}


const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
head.next.next.next.next.next.next = head.next.next;
console.log(`Linked List cycle starts at: ${detectCycle(head)}`)

head.next.next.next.next.next.next = head.next;
console.log(`Linked List cycle starts at: ${detectCycle(head)}`)

head.next.next.next.next.next.next = head.next.next.next;
console.log(`Linked List cycle starts at: ${detectCycle(head)}`)

head.next.next.next.next.next.next = head;
console.log(`Linked List cycle starts at: ${detectCycle(head)}`)

