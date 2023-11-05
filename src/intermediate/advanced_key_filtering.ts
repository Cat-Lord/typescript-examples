type FilteredByCondition<FilteredEntity, Condition> = {
  // if the key extends the condition (meaning it fits the condition)
  [key in keyof FilteredEntity]: FilteredEntity[key] extends Condition
    ? key // return the key
    : never; // otherwise return never
};

//
// example with RGB color
//
type RgbColor = {
  red: number;
  green: number;
  blue: number;
  hex?: string;
  alpha?: number;
};
type RgbFiltered = FilteredByCondition<RgbColor, any>; // as if there was no condition
// type RgbFiltered = {
//   red: "red";
//   green: "green";
//   blue: "blue";
//   hex?: "hex";
//   alpha?: "alpha";
// }

type RgbNumbersFiltered = FilteredByCondition<RgbColor, number>;
// type RgbNumbersFiltered = {
//   red: "red";
//   green: "green";
//   blue: "blue";
//   hex?: never;
//   alpha?: "alpha";
// }

type RgbStringsFiltered = FilteredByCondition<RgbColor, string>;
// type RgbStringsFiltered = {
//   red: never;
//   green: never;
//   blue: never;
//   hex?: "hex";
//   alpha?: never;
// }

type RgbGreenFiltered = FilteredByCondition<RgbColor, number>["green"]; // green
type RgbColorsFiltered = FilteredByCondition<RgbColor, number>[
  | "red"
  | "green"
  | "blue"]; // "green" | "red" | "blue"

//
// return the keys that match the condition
//
type FilteredKeys<FilteredEntity, Condition> = {
  [key in keyof FilteredEntity]: FilteredEntity[key] extends Condition
    ? key
    : never;
}[keyof FilteredEntity]; // select a key that fits the filtered type

type RgbNumberKeysFiltered = FilteredKeys<RgbColor, number>; // "alpha" | "green" | "red" | "blue"
type RgbKeysFiltered = Pick<RgbColor, FilteredKeys<RgbColor, number>>;
// finally we get a type like this:
//      type RgbKeysFiltered = {
//        alpha?: number;
//        green: number;
//        red: number;
//        blue: number;
//      }

//
//
// example with Document
//
//
type DocumentElementFunctions = (...args: any[]) => Element | Element[]; // condition
type DocumentFilter = FilteredKeys<Document, DocumentElementFunctions>; // filtering of the document
type FilteredDocument = Pick<Document, DocumentFilter>; // picking the relevant results

// sample usage - this should filter out only those properties,
// that fit our condition, but for some reason we also see some
// that should not be there. I'm not going to bother fixing this,
// already tried a multiple times. The main idea is captured
// in the FilteredKeys type
function handleDoc(doc: FilteredDocument) {
  doc.querySelector;
  doc.adoptNode;
  doc.onselect;
}
