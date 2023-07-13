//
// types put directly
//
function addNumbers(a: number, b: number): number {
  return a + b;
}

//
// types via interface
//
interface AddTwoNumbers {
  (a: number, b: number): number;
}

const add: AddTwoNumbers = (a, b) => {
  return a + b;
};

//
// types via type
//
type AddTwoNums = (a: number, b: number) => number;

const addTwoNums: AddTwoNums = (a, b) => {
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

// function that expects to return nothing
type VoidReturnFunc = () => void;
type UndefinedReturnFunc = () => undefined;

const runVoidCallback = (callback: VoidReturnFunc) => {
  // ... not important, watch the invocation below
};

const runUndefinedCallback = (callback: UndefinedReturnFunc) => {
  // ... not important, watch the invocation below
};

runVoidCallback(() => Array.from([1, 2, 3])); // A-Ok: We can return anything from the callback, user should ignore it
// runUndefinedCallback(() => Array.from([1,2,3]))   // Error: We shouldn't return anything !

// In case we assign the return value to a variable
const Test: VoidReturnFunc = () => Array.from([1, 2, 3]);
const a = Test(); // it get's "void" type

//
// "new" - not really that useful
//
interface DateConstructor {
  new (value: number): Date;
}

let MyDateConstructor: DateConstructor = Date;
const newDate = new MyDateConstructor(123); // newDate: Date

//
// function overloads
//

// IDEA:
// - forms should come with submit
// - iframes should come with message handlers
// the approach below doesn't work
type FormSubmitHandler = (date: Date) => void;
type IFrameMessageHandler = (date: Object) => void;

const handleMainEvent = (
  elem: HTMLFormElement | HTMLIFrameElement,
  handler: FormSubmitHandler | IFrameMessageHandler
) => {
  /* bla bla */
};

const myIFrame = document.getElementsByTagName("iframe")[0];
handleMainEvent(myIFrame, (some) => {
  /* some: any 😥 */
});
const myForm = document.getElementsByTagName("form")[0];
handleMainEvent(myForm, (some) => {
  /* some: any 😥 */
});

// Fixing it requires us to overload the handleMainEvent function
function handleMainEventTheRightWay(
  elem: HTMLFormElement,
  handler: FormSubmitHandler
); // notice: no body here
function handleMainEventTheRightWay(
  elem: HTMLIFrameElement,
  handler: IFrameMessageHandler
); // notice: no body here
function handleMainEventTheRightWay(
  elem: HTMLFormElement | HTMLIFrameElement,
  handler: FormSubmitHandler | IFrameMessageHandler
) {
  // implementation
}

handleMainEventTheRightWay(myIFrame, (some) => {
  /* some: Object 🥰 */
});
handleMainEventTheRightWay(myForm, (some) => {
  /* some: Date 🥰 */
});

//
// overloading is possible with interfaces / types
// but not fully supported yet
//
interface OverloadedFunction {
  (x: string): void;
  (x: number): void;
}
const of: OverloadedFunction = (x) => {
  // x: any 😥
  return x;
};
// allows string or number
of(5);
of("kefir");

export {};
