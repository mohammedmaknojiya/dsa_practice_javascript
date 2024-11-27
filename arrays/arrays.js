// Arrays organizes data sequentially

// Time complexities

// Lookup / Searching element directly through known index is constant time -> O(1)

// Push element at the end of array takes constant time -> O(1)

// Inserting element at particular index takes linear time -> O(n) because first we insert element at particular index and then shifts element after it to the right

// Unshift / Inserting element at the 0 index takes -> O(n) time because we need to shift all other element

// Shift / Delete element at the 0 index takes -> O(n) time because we need to shift all other element after removing first element

// Pop / Delete last element in array takes -> O(1) time because we didn't required any shifting

// Delete element at particular index takes -> O(n) time because it requires shifting other elements

// ============================================================================

// EXAMPLES

const arr = [];

// pushing element -> takes O(1) time
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);

console.log("After push", arr);

// ============================================================================

// Pushing element at the front of an array -> takes O(n) time
arr.unshift(6);

console.log("After unshift", arr);

// ============================================================================

// Pushing element in between of an array OR at particular index -> takes O(n) time

// We can use splice method from JS arrays. This method helps to remove item at particular index with the items you wanted to add at same index
// The splice method is a versatile method that can add or remove elements from an array.

// This method accept an index from which you want to remove an item
// also no of item you wanted to delete
// also items separated by commas you wanted to insert at particular index

// Syntax: array.splice(startIndex, Count of ele to delete, item1 to insert, item2 to insert, item3 to insert)
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)

arr.splice(2, 0, 7); // Here we wanted to push an item 7 at index 2 without removing any item

console.log("After inserting ele", arr);

// ============================================================================

// Searching an element inside array -> takes O(n) time

const searchEle = 5;
arr.find((item) => item === searchEle); // returns the first element in the provided array that satisfies the provided testing function
arr.findIndex((item) => item === searchEle); // returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === searchEle) {
    console.log("found search element", searchEle, "at index", i);
  }
}

// ============================================================================

// removing element from the end of an array -> takes O(1) time
arr.pop();

console.log("After pop", arr);

// ============================================================================

// removing element at the index 0 -> takes O(n) time

arr.shift(); // Removes the first element from an array and returns it

console.log("After shift", arr);

// ============================================================================

// removing element at particular index -> takes O(n) time

const removedItem = arr.splice(3, 1);

console.log("After removing item", removedItem, "Remaining array", arr);
