// typing "this" keyword
function handleSomeEvent(ev: Event) {
  this.disabled = true; // this: any
}

// solution 1: have this as argument
function handleButtonEvent(this: HTMLButtonElement, ev: Event) {
  this.disabled = true; // "this" is not any anymore
}

// solution 2: bind to an element
// approach 2.1
const button = document.getElementsByTagName("button")[0];
handleSomeEvent.call(button, new Event("click")); // TS understands .bind, .call, .apply
// approach 2.2
const boundHandler = handleSomeEvent.bind(button);
boundHandler(new Event("click"));

export {};
