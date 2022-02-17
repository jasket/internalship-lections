import { isNumeric } from "./helpers/isNumeric";

/**
 * Написать функцию которая принимает число n в качестве аргумента
 * и возвращает сумму всех нечетных чисел от 1 до n включительно.
 * В этой задаче предположим что n не может быть отрицательным
 * @param n - числовой предел
 * @return {string} - список нечетных чисел
 */
export function showOddNumbers(n) {
  if (!isNumeric(n)) throw new Error("Not a number");
  return [...Array(n).keys()].filter((i) => i % 2 === 1).join(", ");
}
