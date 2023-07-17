async function main() {
  const apiResponse = await Promise.all([
    fetch("http://example.com"),
    Promise.resolve("Cats are Love"),
  ]);

  type ResponseType = typeof apiResponse; // : [Response, string]
}

type MainType = typeof main; // : () => Promise<void>

class Vegetable {
  constructor(
    public readonly name: string,
    public readonly mass: number,
    public readonly color: string
  ) {}

  static createCarrot() {
    return new Vegetable("Carrot", 100, "orange");
  }
}

const VegetableType = Vegetable; // : typeof Vegetable
const veggie = Vegetable.createCarrot(); // : Vegetable
