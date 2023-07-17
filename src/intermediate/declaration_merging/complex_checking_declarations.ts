class Fruit {
  name?: string;
  color?: string;
  weight?: number;

  static createBanana(): Fruit {
    return {
      name: "Banana",
      weight: 1000,
      color: "yellow",
    };
  }
}

// let's perform the same tests as in "simple_check.ts"
const v = Fruit;
v.createBanana;
v.apply;
v.call;
v.toString;
// ... v behaves more like an object

const f_o: Fruit = {};
f_o.name;
f_o.color;
f_o.weight;
// ... here we're able to access attributes
