import { isNumeric } from "./helpers/isNumeric";

/**
 * Написать функцию которая вычисляет дискриминант квадратного уравнения.
 * Квадратное уравнение — это уравнение вида ax^2 + bx + c = 0,
 * где коэффициенты a, b и c — произвольные числа
 * @param a - первый коэфф. (старший)
 * @param b - второй коэфф. (коэфф. при x)
 * @param c - третий коэфф. (свободный член)
 * @return {number} D - D = b^2-4ac.
 */
export function calculateDiscriminant(a, b, c) {
  if (!isNumeric(a)) throw new Error("a is not a number");
  if (!isNumeric(b)) throw new Error("b is not a number");
  if (!isNumeric(c)) throw new Error("c is not a number");
  const D = b ** 2 - 4 * a * c;
  return Math.round(D * 1e6) / 1e6;
}
