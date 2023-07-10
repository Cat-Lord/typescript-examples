// typescript cares about the structure of the passed variable, not
// necessarily about its class name or excess properties

class Car {
  model: string;
  year: number;
}

class Truck {
  model: string;
  year: number;
  maximalWeight: number;
}

const vehicle = {
  model: "Hyundai",
  year: 2012,
  color: "red",
};

function checkCar(car: { model: string; year: number }) {
  // ...
}

checkCar(new Car()); // OK
checkCar(new Truck()); // OK
checkCar(vehicle); // OK
