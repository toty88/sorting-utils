import { merge } from "../merge";
import { describe, expect, test } from "vitest";

describe("merge", () => {
  test.each([
    [[2], [], []],
    [[], [2], []],
    [[2], [2], [2, 2]],
    [[3], [2], [2, 3]],
    [
      [1, 4],
      [2, 5],
      [1, 2, 4, 5],
    ],
    [
      [3, 7],
      [1, 5, 9],
      [1, 3, 5, 7, 9],
    ],
    [
      [1, 4, 6],
      [2, 5],
      [1, 2, 4, 5, 6],
    ],
    [
      [2, 5],
      [1, 6, 7],
      [1, 2, 5, 6, 7],
    ],
  ])("merge(%j, %j) should be %j", (arg1, arg2, expected) => {
    expect(merge(arg1, arg2, (a, b) => a < b)).toStrictEqual(expected);
  });
});
