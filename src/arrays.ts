//
// ARRAYS
//
const simple_array = [1, 2, 3]; // : number
const object_array = [
  {
    cat: "eddy",
    breed: "british",
  },
]; // : { cat: string; breed: string; }

//
// TUPLES
//
const [some, property] = ["some", 1];
// some: string
// property: number

const tuple_array: [number, string, number] = [1, "meow", 2];

// if we're not careful, we are allowed to break this rule
const only_two_numbers_array: [number, number] = [1, 2];
only_two_numbers_array.push(3);
only_two_numbers_array.push(4);

// limiting the type we can avoid such issues
const numPair: readonly [number, number] = [4, 5];
// numPair.push(4);     // throws (a bit misleading) error: Property push does not exist on type readonly [number, number]
// numPair.pop();       // (expected) error as well
