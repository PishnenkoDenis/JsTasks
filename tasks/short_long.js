function shortLongShort(a, b) {
  return a.length < b.length ? a + b + a : b + a + b;
}

console.log(shortLongShort("1", "22"));
console.log(shortLongShort("Short", "Longest"));
