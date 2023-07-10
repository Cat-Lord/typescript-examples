// cat name, birth date, breed
// "Eddy": { birth: 1. Jan 2020, breed: "European Shorthair" }
// "Luna": { birth: 2. Jan 2020, breed: "Siamese" }

const cats: {
  [catName: string]:
    | {
        birth: Date;
        breed: string;
      }
    | undefined;
} = {
  //   Eddy: { birth: new Date(2000, 0, 1), breed: "European Shorthair" },
  //   Luna: { birth: new Date(2000, 0, 2), breed: "Siamese" },
};

cats.x.birth.getFullYear(); // CARE - this is allowed by default !
