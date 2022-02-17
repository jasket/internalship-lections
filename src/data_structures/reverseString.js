/**
 * Написать функцию которая принимает строковый аргумент и возвращает его обратную версию.
 * @param text - переданный текст
 * @return {string} - строка, обратная переданному тексту
 */
export function reverseString(text) {
  if (typeof text !== "string") throw new Error("Not a string");
  return Array.from(text).reverse().join("");
}
