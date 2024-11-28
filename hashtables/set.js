// In JavaScript, Map and Set are built-in objects that provide more flexible data structures compared to the traditional objects and arrays. They offer unique features and methods that make them highly useful for various operations involving key-value pairs and unique collections of values.

// A Set is a collection of unique values. Values in a Set are ordered by insertion order.

// ============================================================================

// Creating a new Set

const set = new Set();

console.log("new Set", set);

// ============================================================================

// Adding value to the new set
// NOTE: If value already exists it will not added

// add(value): Adds a new value to the set.

set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);

console.log("Set", set);

// ============================================================================

// Check if value exists in set

// has(value): Checks if the set contains the given value.

console.log(set.has(5));

// ============================================================================

// Size of set

// size: Returns the number of values in the set

console.log(set.size);

// ============================================================================

// Iterating over set values
// IMP NOTE: Since sets don't have keys hence set.keys() and set.values() both return same results

// values(): Returns an iterator for the values in the set. Equivalent to keys()
// keys(): Returns an iterator for the values in the set (since a Set has no keys). Equivalent to values().

console.log(set.keys());
console.log(set.values());

// ============================================================================

// entries(): Returns an iterator for the [value, value] pairs in the set. Each entry's key and value are the same.

const entries = set.entries();

console.log("Entries", entries);

for (let entry of set.entries()) {
  console.log(entry);
}

// ============================================================================

// forEach(callback): Executes a provided function once for each value in the set.

set.forEach((value) => {
  console.log(`${value}`);
});

// ============================================================================

// Deleting a value from the set

// delete(value): Removes the given value from the set

console.log("Before delete", set);

set.delete(5);

console.log("After delete", set);

// ============================================================================

// Clearing all values from set

set.clear();

console.log("After clearing all values", set);

// EXAMPLE

// Using Set to Remove Duplicates

let numbers = [1, 2, 3, 4, 3, 2, 1];
let uniqueNumbers = new Set(numbers);
console.log(uniqueNumbers); // Output: Set { 1, 2, 3, 4 }

let uniqueArray = Array.from(uniqueNumbers);
console.log(uniqueArray); // Output: [ 1, 2, 3, 4 ]
