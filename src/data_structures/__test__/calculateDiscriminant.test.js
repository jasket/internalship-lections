import { calculateDiscriminant } from "../calculateDiscriminant";

describe("calculate discriminant", () => {
  test("calculate discriminant with error", () => {
    expect(() => calculateDiscriminant("asd", 0, 5)).toThrowError();
    expect(() => calculateDiscriminant(1, {}, 5)).toThrowError();
    expect(() => calculateDiscriminant(1, 2, Date())).toThrowError();
  });

  test("calculate discriminant", () => {
    // 3x^2-14x-5=0, D=256
    expect(calculateDiscriminant(3, -14, -5)).toBe(256);

    // x^2+4x+3=0, D=49
    expect(calculateDiscriminant(1, 4, 3)).toBe(4);
  });
});
