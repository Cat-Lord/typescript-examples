//
// Here are all the definitions, exported
//
interface Fruit {
  name: string;
  massInGrams: number;
  color: string;
}

class Fruit {
  static createBanana(): Fruit {
    return {
      name: "Banana",
      massInGrams: 1000,
      color: "yellow",
    };
  }
}

namespace Fruit {
  function createFruit(): Fruit {
    return Fruit.createBanana();
  }
}

/*
  (alias) class Fruit
  (alias) interface Fruit
  (alias) namespace Fruit
  export Fruit
*/
export { Fruit };
