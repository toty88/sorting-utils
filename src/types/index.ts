export type ArrayOrNot<T> = T[] | unknown
export type ObjRecord = Record<string, number>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GenericFunction = (...args: any[]) => any
