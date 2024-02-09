//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

function validatePIN(pin) {
  return Number.parseInt(pin) && (pin.length === 4 || pin.length === 6);
}

const regex = new RegExp(/^([0-9]{4})$|^([0-9]{6})$/);

function validatePINbyRegExp(pin) {
  return regex.test(pin);
}

console.log("validatePIN(1234)", validatePINbyRegExp("1234"));
console.log("validatePIN(123456)", validatePINbyRegExp("123456"));
console.log("validatePIN(12)", validatePINbyRegExp("12"));
console.log("validatePIN(12345678)", validatePINbyRegExp("12345678"));
