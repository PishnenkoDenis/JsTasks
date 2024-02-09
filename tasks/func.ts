//Описание функции

type TSum = (a: number, b: number) => number;

const sumB: TSum = (a, b) => a + b;

interface sumFunc {
  (a: number, b: number): number;
}

type S = {
  prefix: string;
  value: unknown;
};
type O = Record<string, S>;

type R = Record<`${S["prefix"]}-${keyof O}`, O[keyof O]["value"]>;

function getRec<T extends O>(obj: T): R {
  const entries = Object.entries(obj).map((item) => {
    return [`${item[1].prefix}-${item[0]}`, item[1].value];
  });
  return Object.fromEntries(entries);
}
