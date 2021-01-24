// create a class for the linked list

class LinkedList {
  constructor(){
    this.head = null // First element of the linked list
    this.tail = null // Last element of the linked list
  }

  append(value){
    const newNode = {value: value, next: null}
    if(this.tail){
      this.tail.next = newNode
    }
    this.tail = newNode;

    if(!this.head){
      this.head = newNode
    }
  }

  toArray(){
    const elements = []
    let currentNode = this.head
    while(currentNode){
      elements.push(currentNode)
      currentNode = currentNode.next
    }
    return elements
  }
}



let list = new LinkedList()
list.append(5)
list.append(4)
list.append(5)
list.append(7)
list.append('hi')
list.append('india')

//console.log(list.toArray())

var hasCycle = function(head) {
  let slowPointer = head;
  let fastPointer = head;
  
  while (fastPointer !== null && fastPointer.next !== null){
      slowPointer = slowPointer.next
      fastPointer = fastPointer.next.next
      if(slowPointer === fastPointer) return true
      
  }
  return false
};

