// Hash-tables are also know as dictionary / objects in another language
// Hash tables values are not stored in ordered manner
// Hence deleting and inserting items from it won't require shifting of other elements

const obj = {};

// Insert an element will take -> O(1) time

// Lookup or Search of an element will take -> O(1) time

// Delete of an element will take -> O(1) time

// Only accessing keys from an object / hash tables will take -> O(n) time
// Because keys are randomly stored in memory. Hence accessing them 1 by 1 will takes O(n) time

// ============================================================================

// Inserting an element in object takes O(1) time

obj["name"] = "mohammed";
obj.age = 25;
obj.gender = "male";

console.log("After Insert", obj);

// ============================================================================

// Searching an element in object take O(1) time

console.log("Logging name and age of person", obj["name"], obj.age);

// ============================================================================

// deleting an element in object takes O(1) time

console.log("Before deleting age", obj);

delete obj.age;

console.log("After deleting age", obj);

// ============================================================================

// Looping through an object will take O(n) times

for (const [key, value] of Object.entries(obj)) {
  console.log("Accessing elements of an object", key, value);
}

// Getting only keys of an object will take O(n) time

const keys = Object.keys(obj); // return an array

console.log("Accessing keys", keys);

// Getting only values of an object will take O(n) time

const values = Object.values(obj); // return an array

console.log("Accessing values", values);
