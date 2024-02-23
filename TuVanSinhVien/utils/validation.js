export function isEmail(value) {
  return value.includes('@');
}

export function isPhoneNumber(value) {
  const pattern =
    /^(0)((3([2-9]))|(5([25689]))|(7([0|6-9]))|(8([1-9]))|(9([0-9])))([0-9]{7})$/;
  return pattern.test(value);
}

// export function isNotEmpty(value) {
//   return value.trim() !== '';
// }

export function hasMinLength(value, minLength) {
  return value.length >= minLength;
}

export function isEqualsToOtherValue(value, otherValue) {
  return value === otherValue;
}
