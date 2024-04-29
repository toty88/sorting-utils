import { type ArrayOrNot } from '@/types'

/**
 * Determines if param is instance of Array and returns it, otherwise returns empty array
 *
 * @param arr possible array
 * @returns either same arr or empty one
 */
export const arraylable = <T extends ArrayOrNot<T>>(arr: T): T | [] => (Array.isArray(arr) ? arr : [])
