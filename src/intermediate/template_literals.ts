type GameObject = "cabin" | "tree" | "car";
type Behaviour = "hostile" | "friendly" | "neutral";

// now lets see how we can combine these things with the help of TS

type Entities = `GO_${GameObject}_${Behaviour}`;
// 🧠 this GENERATES following types 😵:
//      "GO_cabin_hostile"
//      "GO_cabin_friendly"
//      "GO_cabin_neutral"
//      "GO_tree_hostile"
//      "GO_tree_friendly"
//      "GO_tree_neutral"
//      "GO_car_hostile"
//      "GO_car_friendly"
//      "GO_car_neutral"

// there are several utilities for this:

type BlendMode = "OPAQUE" | "TRANSPARENT";
type CamelCaseEntities =
  `GO${Capitalize<GameObject>}${Capitalize<Behaviour>}${Capitalize<
    Lowercase<BlendMode>
  >}`;
//      "GOCabinHostileOpaque"
//      "GOCabinHostileTransparent"
//      "GOCabinFriendlyOpaque"
//      "GOCabinFriendlyTransparent"
//      "GOCabinNeutralOpaque"
//      "GOCabinNeutralTransparent"
//      ...

// we can even generate methods based on type properties
type DataState = {
  names: string[];
  userPreferences: Record<"mobile" | "darkMode", boolean>;
};

type DataStateOptions = {
  [setKey in keyof DataState as `set${Capitalize<setKey>}`]: (
    setArgs: DataState[setKey]
  ) => void;
};

// sample usage
function handleSomething(data: DataStateOptions) {
  data.setNames(["a", "b"]);
  data.setUserPreferences({ darkMode: true, mobile: false });

  // demonstration of error
  // data.setUserPreferences({ darkMode: true, mobil: false });
}
