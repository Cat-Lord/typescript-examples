type Colors =
  | "red"
  | "brown"
  | "blue"
  | [number, number, number] // rgb array
  | [number] // random numbers, see "NumberedColors" and "RGBArrayColors" below
  | string // hex
  | { red: number; green: number; blue: number }
  | { red: number; alpha: number; isCool: boolean }; // just a demonstration, see "RedValuedColors" below

//
//
// Extract
//
//
type StringColors = Extract<Colors, string>; // : string (not literal types though)

// notice: we want at least the red value - we don't need an exact match,
// this is a minimum requirement for our extraction
type RedValuedColors = Extract<Colors, { red: number }>;
// : type RedValuedColors = { red: number; green: number; blue: number; } |
//                          { red: number; alpha: number; isCool: boolean; }

type NumberedColors = Extract<Colors, number[]>; // : [number, number, number] | [number]
type RGBArrayColors = Extract<Colors, [number, number, number]>; // : [number, number, number]

// what if we search for something that's not in the type ?
type WeirdColors = Extract<Colors, boolean>; // : never 😊

//
//
// Exclude (opposite of extract)
//
//
type NoStringColors = Exclude<Colors, string>;
/* 
  : [number, number, number] | [number] | {
      red: number;
      green: number;
      blue: number;
    } | {
      red: number;
      alpha: number;
      isCool: boolean;
    }
*/

type NoRedValuedColors = Exclude<Colors, { red: number }>; // : string | [number, number, number] | [number]

type NoNumberedColors = Exclude<Colors, number[]>;
/* 
  : string | {
      red: number;
      green: number;
      blue: number;
    } | {
      red: number;
      alpha: number;
      isCool: boolean;
    }
*/

type NoRGBArrayColors = Exclude<Colors, [number, number, number]>; // : [number, number, number]
/* 
  : string | [number] | {
    red: number;
    green: number;
    blue: number;
  } | {
      red: number;
      alpha: number;
      isCool: boolean;
  }
*/

// what if we search for something that's not in the type ?
type NoWeirdColors = Exclude<Colors, boolean>; // we get the same type, no changes
// 🧠
type WithoutAnyColors = Exclude<Colors, any>; // : never
