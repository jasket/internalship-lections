import { reverseString } from "../reverseString";

describe("should reverse string", () => {
  test("should reverse not a string", () => {
    expect(() => reverseString(112233)).toThrowError();
  });

  test("should reverse text", () => {
    expect(reverseString("Привет мир!")).toEqual("!рим тевирП");
  });
});
