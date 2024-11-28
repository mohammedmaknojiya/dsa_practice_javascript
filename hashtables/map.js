// In JavaScript, Map and Set are built-in objects that provide more flexible data structures compared to the traditional objects and arrays. They offer unique features and methods that make them highly useful for various operations involving key-value pairs and unique collections of values.

// NOTE IMP: A Map is a collection of key-value pairs where both keys and values can be of any type. The order of the elements is the order of insertion.

// KEYS and VALUES can be of any type.
// In Object keys are always String. Here it can be function, object, string, number or any

// ============================================================================

// Creating new Map

const map = new Map();

console.log("Map", map);

// ============================================================================

// Set / Add new value

// set(key, value): Adds or updates a key-value pair in the map.

map.set("name", "mohammed");
map.set(42, "random number");
map.set("age", 20);

console.log("After adding values", map);

// ============================================================================

// Get / Retrieve value

// get(key): Retrieves the value associated with the given key

console.log("Get name", map.get("name"));
console.log("Get age", map.get("age"));
console.log("Get random number", map.get(42));

// ============================================================================

// Check if map contains a particular value

// has(key): Checks if the map contains the given key.

console.log("Check map has name key", map.has("name"));

// ============================================================================

// Deleting a key value pair

// delete(key): Removes the key-value pair associated with the given key.

console.log("Before deleting", map);

map.delete(42);

console.log("After deleting", map);

// ============================================================================

// Size of an object

// size: Returns the number of key-value pairs in the map.

console.log("Size of an object", map.size);

// ============================================================================

// keys(): Returns an iterator for the keys in the map.

const objKeys = map.keys();

console.log("Keys of an object", objKeys);

for (let key of objKeys) {
  console.log(key);
}

// ============================================================================

// values(): Returns an iterator for the values in the map.

const objValues = map.values();

console.log("Values of an object", objValues);

for (let value of objValues) {
  console.log(value);
}

// ============================================================================

// entries(): Returns an iterator for the values in the map.

const entries = map.entries();

console.log("Entries of an object", entries);

for (let [key, value] of entries) {
  console.log(key, value);
}

// ============================================================================

// forEach(callback): Executes a provided function once for each key-value pair in the map.

map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// ============================================================================

// clear(): Removes all key-value pairs from the map

console.log("Before clear", map);
map.clear();
console.log("After clear", map);
