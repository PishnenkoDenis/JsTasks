function falsyFilter(arr) {
  return arr.filter(Boolean);
}

console.log(falsyFilter([22, "str", false, 8, NaN, ""]));
//1,3,5,7,4,6,2
