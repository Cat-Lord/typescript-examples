import { Fruit } from "./declaration_merging/fruit";

//
//
// dictionary - the most flexible approach
//
//
type Dictionary = { [k: string]: any };
const anything: Dictionary = {
  some: "ABCD",
  thing: true,
  anyValue: {
    isPossible: true,
    here: 69,
  },
};

//
//
// index signature - a dictionary with specific return type
//
//
type Dict<T> = { [k: string]: T };

const fruits: Dict<Fruit> = {};
fruits.apple; // Fruit (although care, it can clearly be undefined)

//
//
// Mapped type - narrowed for a specific use case
//
//
type MyFruitRecord = { [FruitKey in "apple" | "cherry"]: Fruit }; // notice "in"

// and create all the required fruits (we cannot create just one of them)
const goodFruits: MyFruitRecord = {
  apple: {
    name: "Huge Apple",
    color: "green",
    massInGrams: 120,
  },
  cherry: {
    name: "Red Cherry Berry",
    color: "red",
    massInGrams: 80,
  },
};
goodFruits.apple;
goodFruits.cherry;
// goodFruits.pineapple; // error, as expected

//
//
// Records - generalized, sort of a subset of dictionaries
//
//
type JuicyFruit = Record<"apple" | "cherry", Fruit>;

// we are required to supply definition for both cherry and apple
const t: JuicyFruit = {
  apple: {
    name: "Best Branch Apple",
    color: "green",
    massInGrams: 120,
  },
  cherry: {
    name: "Red Cherry Berry",
    color: "red",
    massInGrams: 80,
  },
};

//
//
// Indexed Access Type - getting a specific subset of other type
//
//
// let's get a subset of the Window type
type PartOfWindow = {
  [key in "document" | "navigator" | "setTimeout"]: Window[key];
};
// this is now the content of this type:
//    type PartOfWindow = {
//      document: Document;
//      navigator: Navigator;
//      setTimeout: (handler: TimerHandler, timeout?: number, ...arguments: any[]) => number;
//    }

// making the selection of properties safe assuring that keys
// selected from window really do belong to window
type SaferPartOfWindow<Key extends keyof Window> = {
  [key in Key]: Window[key];
};

// we can use this to e.g. polyfill
let windowKeys: SaferPartOfWindow<
  "document" | "addEventListener" | "setInterval"
  // | "mistake" // this would show an error, because there is no such property on window 🍷
>;

// we can use native TS element 🙂
type WindowProperties = Pick<
  Window,
  "document" | "addEventListener" | "setInterval"
>;
