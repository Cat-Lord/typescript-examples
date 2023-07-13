// null
const obj_null = {
  cat: "Meow",
  dog: null, // there is a value for dog and it's nothing
};

// undefined
const obj_undefined = {
  user: "Johnny",
  graduatedAt: undefined, // value is not there, but it can be there eventually
};

// void (already mentioned)
// used for function returns indicating that return
// value of such function should be ignored
interface VoidFunction {
  (valueToStore: string): void;
}

// non-null assertion
const deep_obj = {
  deep_prop: {
    even_deeper: undefined,
  },
};

deep_obj.deep_prop.even_deeper.color!.hexValue; // doesn't show error without !. but it's demonstrated anyways

class NotInitializedAttr {
  setupPromise: Promise<any>;
  // isSet: boolean;    // would throw an error
  isSet!: boolean; // notice the operator

  constructor() {
    this.setupPromise = new Promise(() => {
      this.isSet = false;
      return this.doSetup();
    }).then(() => (this.isSet = true));
  }

  private async doSetup() {}
}
