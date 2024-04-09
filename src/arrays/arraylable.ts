type ArrayOrNot<T> = T[] | unknown;

export const arraylable = <T extends ArrayOrNot<T>>(t: T): T | [] =>
  Array.isArray(t) ? t : [];
