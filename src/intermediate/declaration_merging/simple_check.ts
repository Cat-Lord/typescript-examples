//
// this file shows how to test if a declaration is namespace, interface, ...
//
const is_a_value = 4;
type is_a_type = {};
namespace is_a_namespace {
  const x = 69;
}

// now let's check if something is a value
const valueToCheck = is_a_value; // Ok
// const valueToCheck = is_a_type;  // Error: is_a_type only refers to a type, but is being used as a value here.

const val: is_a_type = {}; // Ok
// const val: is_a_value = {} // is_a_value refers to a value, but is being used as a type here.

// namespace check is useful with code editor hints
is_a_namespace; // hover shows text 'namespace is_a_namespace'
