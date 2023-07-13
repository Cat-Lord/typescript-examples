// typing code is similar to reducing the number
// of possible values of a variable (note that
// the curly braces in comments below don't
// represent objects, but rather sets)
let a: 5 | 6 | 7; // one of {5, 6, 7} nothing else
let b: number; // one of {-1, 5.6, 256126, ...}
let c: boolean; // one of {true, false}

// the most "allow anything" type is "any" - allows
// usage of anything that javascript contains
let flexible: any; // symbol, null, function, string, ...
flexible = "meow";
flexible = () => undefined;
flexible = null;
flexible = { a: "1" };

// risks: lack of type checking
flexible.access.is.sadly.not.checked.because.of.the.flexibility();

// "unknown" can also accept any value (also a top type)
let unknownFlexible: unknown;
unknownFlexible = "meow";
unknownFlexible = () => undefined;
unknownFlexible = null;
unknownFlexible = { a: "1" };

// but it cannot be used without a type guard
// unknownFlexible.access.is.sadly.not.checked.because.of.the.flexibility();        // error !
if (typeof unknownFlexible === "number") {
  const result = unknownFlexible * 2; // ok
}

// BOTTOM TYPES
// never - doesn't accept any value
let n: never; // accepts { } - purposely no values in the accepted set

// imagine we are returning random vehicle tag and we
// added a new case of "boat"
const getRandomVehicle = (): any => {
  const randomNum = Math.random();
  if (randomNum >= 0.5) return "car";
  if (randomNum >= 0.3 && randomNum <= 0.5) return "boat";
  return "truck";
};

// we also changed the type of vehicle to include "boat"
const vehicle: "car" | "truck" | "boat" = getRandomVehicle();

// but we forgot to check for the "boat" type here (it might be
// in a different file, place, ...)
if (vehicle === "car") {
  // do something with a car
} else if (vehicle === "truck") {
  // do something with a truck
} else {
  // since we defined this case as "never", assigning anything to it will
  // result in an error informing us that there is something we didn't
  // handle in our changes
  //   const unknownVehicle: never = vehicle;            // error because we forgot to handle "boat" case
}

// useful example of using unexpected error cases
class UnreachableError extends Error {
  // will throw an error if we accidentally populate _nvr from outside
  constructor(_nvr: never, message: string) {
    super(message);
  }
}

// works nicer in a switch statement
if (vehicle === "car") {
  // do something with a car
} else if (vehicle === "truck") {
  // do something with a truck
} else {
  // handling error in case something unexpected happened during compilation
  // throw new UnreachableError(vehicle, `Unexpected vehicle type: ${vehicle}`);
}

// narrowing types
let checkMe:
  | Date
  | null
  | undefined
  | "pineapple"
  | [number]
  | { dateRange: [Date, Date] };

if (checkMe instanceof Date) {
  // checkme: Date
} else if (checkMe === null) {
  // checkme: null
} else if (!checkMe) {
  // care about false, empty strings or 0
  // checkme: undefined
} else if (typeof checkMe === "string") {
  // checkme: string
} else if (Array.isArray(checkMe)) {
  // checkme: array
} else if ("dateRange" in checkMe) {
  // checkme: { dateRange: [Date, Date] }
} else {
  // checkme: never
}

// custom type guard - more flexible approach for complex objects
type CarLike = {
  model: string;
  year: number;
};

// notice special keyword "is" - this tells TS that
// it should believe us that the object is really
// of type "CarLike".
// We should return boolean value indicating our decision.
const isCarLike = (obj: any): obj is CarLike => {
  // check if the structure conforms the CarLike type
  if (
    !obj &&
    typeof obj === "object" &&
    "model" in obj &&
    typeof obj.model === "string" &&
    "year" in obj &&
    typeof obj.year === "number"
  ) {
    throw new Error("Received object is not a CarLike: " + obj);
  }

  return true;
};

const obj: unknown = {
  model: "test model",
  year: 2010,
};
// checking an unknown value
if (isCarLike(obj)) {
  // obj: CarLike
}

export {};
