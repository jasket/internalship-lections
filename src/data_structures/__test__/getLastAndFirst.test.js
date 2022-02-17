import { getLastAndFirst } from "../getLastAndFirst";

describe("should getLastAndFirst return correct data", () => {
  test("should return error when not an array", () => {
    expect(() => getLastAndFirst(Date())).toThrowError();
    expect(() => getLastAndFirst("test")).toThrowError();
  });

  test("should return array with first and last item", () => {
    expect(getLastAndFirst([1, 3, 4, 30])).toEqual([1, 30]);
    expect(getLastAndFirst([1, 2])).toEqual([1, 2]);
    expect(getLastAndFirst([1, "test", "last"])).toEqual([1, "last"]);
  });
});
