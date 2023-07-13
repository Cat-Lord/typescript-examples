// simple approach, works well
class Vehicle {
  model: string;
  year: number;

  constructor(model: string, year: number) {
    this.model = model;
    this.year = year;
  }
}

class Cat {
  public readonly name: string;
  public readonly birth: Date;
  protected ownerId: number;
  private vetIdentifier: number; // #vetIdentifier could also be used

  constructor(
    name: string,
    birth: Date,
    ownerId: number,
    vetIdentifier: number
  ) {
    this.name = name;
    this.birth = birth;
    this.ownerId = ownerId;
    this.vetIdentifier = vetIdentifier;
  }

  // example of exposing private functions to
  // external world with precautions if necessary
  public changeVet(vetId: number) {
    // do some verification logic for example
    return this.changeVetIdentifier(vetId);
  }

  private changeVetIdentifier(vetId: number): boolean {
    // ...
    this.vetIdentifier = vetId;
    return true;
  }
}

class SimpleCat {
  // concise TS constructor
  constructor(
    public readonly name: string,
    public readonly birth: Date,
    protected ownerId: number,
    private vetIdentifier: number
  ) {}
}

//
// Order of operations with subclasses
//
class Base {}

class Child extends Base {
  private value = console.log("Value assignment happening...");
  constructor(public childProperty: string) {
    super();
    console.log("super() was called");
  }
}

// Actual execution order:
// 	1. super()
// 	2. child gets the "childProperty" attribute assigned
// 	3. child's "value" property gets assigned
// 	4, child's constructor console.log is called (meaning all the code
//       that's in the constructor other that super() call)

const child = new Child("Example");

export {};
