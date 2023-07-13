// create intersection of two possible types

function flipCoin():
  | ["error", Error]
  | ["success", { name: string; value: number }] {
  const value = Math.random();
  if (value >= 0.5) {
    return [
      "success",
      {
        name: "Flip a coin",
        value: value,
      },
    ];
  } else {
    return ["error", new Error("Flipped value " + value)];
  }
}

const [coinStatus, coinObj] = flipCoin();

if (coinStatus === "success") {
  coinObj; // { name: string, value: number }
} else {
  coinObj; // : Error
}

if (coinObj instanceof Error) {
  coinObj; // : Error
  coinStatus; // can be still either "success" or "error", typescript doesn't know more
} else {
  coinObj; // { name: string, value: number }
}

export {};
