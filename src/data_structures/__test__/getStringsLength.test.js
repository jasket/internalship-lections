import { getStringsLength } from "../getStringsLength";

describe("should return string with items length", () => {
  test("should return error when not an array", () => {
    expect(() => getStringsLength(Date())).toThrowError();
    expect(() => getStringsLength("test")).toThrowError();
  });

  test("should return string with items length", () => {
    expect(getStringsLength(["1", "2", "123", "12345"])).toEqual([1, 1, 3, 5]);
  });
});
