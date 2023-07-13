function timeout(time: number) {
  return new Promise((res) => setTimeout(res, time));
}

export async function addNumbers(a: number, b: number) {
  timeout(500);
  return a + b;
}

(async () => {
  console.log("Program started");
  console.log("A + B: ", await addNumbers(3, 5));
})();

export {};
