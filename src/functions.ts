//
// types put directly
//
function addNumbers(a: number, b: number): number {
  return a + b;
}

//
// types via interface (type also works)
//
interface AddTwoNumbers {
  (a: number, b: number): number;
}

const add: AddTwoNumbers = (a, b) => {
  return a + b;
};

//
// Complex example
//
type NumbersArg = {
  a: number;
  b: number;
};

interface AddArgs {
  (args: NumbersArg): number;
}

const addNums: AddArgs = ({ a, b }) => {
  return a + b;
};
