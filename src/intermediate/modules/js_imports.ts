import kiwi from "berries"; // default import
import { raspberry, strawberry } from "./berries"; // named imports

export function f() {} // named export
export default class Casket {
  strawberry = strawberry;
  raspberry = raspberry;
  kiwi = kiwi;
} // default export

// masquerading export as if the things below came
// from our module instead of the 'berries' one
export { raspberry, strawberry } from "./berries";
