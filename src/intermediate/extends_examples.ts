type question_1 = 64 extends number ? true : false;
// : true

type question_2 = number extends 64 ? true : false;
// : false

type question_3 = string[] extends any ? true : false;
// : true

type question_4 = string[] extends any[] ? true : false;
// : true

type question_5 = never extends any ? true : false;
// : true

type question_6 = any extends any ? true : false;
// : true

// the type that we are checking against is sometimes referred to as "new-able"
// which basically means "Are you something, that can be invoked with the 'new' keyword?" false
type question_7 = Date extends { new (...args: any[]): any } ? true : false;
// : false

type question_8 = typeof Date extends { new (...args: any[]): any }
  ? true
  : false;
//
