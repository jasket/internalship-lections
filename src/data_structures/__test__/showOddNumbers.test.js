import { showOddNumbers } from "../showOddNumbers";

describe("should get odd numbers from N", () => {
  test("should work with correct data", () => {
    expect(() => showOddNumbers("test")).toThrowError();
  });

  test("should show only odd numbers", () => {
    expect(showOddNumbers(10)).toEqual("1, 3, 5, 7, 9");
    expect(showOddNumbers(2)).toEqual("1");
  });
});
