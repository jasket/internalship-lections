import { compareString } from "../compareString";

describe("should compare two text", () => {
  test("should compare wrong type", () => {
    expect(() => compareString(111, "java")).toThrowError();
    expect(() => compareString("test", {})).toThrowError();
  });

  test("should compare two text", () => {
    expect(compareString("Java", "java")).toEqual(0);
  });
});
