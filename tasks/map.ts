function mapper<T, F>(arr: T[], cb: (v: T, i: number, a: T[]) => F): F[] {
  return arr.map(cb);
}
