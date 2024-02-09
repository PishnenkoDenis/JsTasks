const tree = [
  {
    v: 5,
    c: [
      {
        v: 5,
      },
      {
        v: 10,
        c: [
          {
            v: 11,
          },
        ],
      },
      {
        v: 11,
        c: [
          {
            v: 12,
            c: [
              {
                v: 5,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    v: 5,
    c: [
      {
        v: 7,
      },
      {
        v: 12,
        c: [
          {
            v: 11,
          },
        ],
      },
      {
        v: 14,
      },
    ],
  },
];

function treeSum(tree) {
  if (!tree.length) return 0;

  let sum = 0;
  let stack = [];

  tree.forEach((node) => stack.push(node));

  while (stack.length) {
    let node = stack.pop();
    sum += node.v;

    if (node.c && node.c instanceof Array) {
      node.c.forEach((node) => stack.push(node));
    }
  }

  return sum;
}

console.log(treeSum(tree));
