const a = {
  admin: false,
};

const b = { __proto__: a };
b.admin = true;
const c = { __proto__: a };

console.log(c.admin); //false
