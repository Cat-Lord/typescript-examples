function wrapInArray<T>(arg: T): [T] {
  return [arg];
}

wrapInArray(3); // T: number
wrapInArray(new Date()); // T: Date
wrapInArray(new RegExp("/s/")); // T: Regexp

// constraining the T to make sure it
// is at least of a certain type
type EntityWithId = {
  id: string;
};

function convert<T extends EntityWithId>(args: T[]) {
  args.map((arg) => {
    arg.id; // Ok !
  });
}

function tupleCreator<T>(first: T) {
  return function finishTuple<S>(second: S): [T, S] {
    return [first, second];
  };
}

const nullTuple = tupleCreator(1);
const x = nullTuple(null); // [number, any] 😕
const y = nullTuple("1"); // [number, string]
const z = nullTuple([1, 2, 3, 4, 5]); // [number, number[]]

// care about the types, because you might accidentally
// type cast when not paying attention
//                       🔽 notice the any
function transformToT<T>(arg: any): T {
  return arg;
}

const num = transformToT<number>(window);
// ❗num is now number❗

// same as doing this
const dangerNum = window as any as number;

// use simple types in generics
function betterF<T extends EntityWithId>(list: T[]) {
  // simple and good
  return list.pop();
}
