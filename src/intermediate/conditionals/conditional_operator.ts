// ternary operator
type Grill = {
  turnGasOn: () => void;
  turnGasOff: () => void;
};

type Oven = {
  setTemperature: (temp: number) => void;
};

// here we see an interesting use of "extends" keyword to test the condition
type CookingDevice<T> = T extends "grill" ? Grill : Oven;
let myGrill: CookingDevice<"grill">; // : Grill
let myOven: CookingDevice<"oven">; // : Oven
