/*
 * Написать функцию которая сравнивает 2 строки в независимости от регистра.
 * @param stringA - первая строка
 * @param stringB -вторая строка
 * @return {number} - -1, 0, 1 (меньше, равно, больше)
 */
export function compareString(stringA, stringB) {
  if (typeof stringA !== "string")
    throw new Error("First param is not a string");
  if (typeof stringB !== "string")
    throw new Error("Second param is not a string");
  return stringA.toLowerCase().localeCompare(stringB.toLowerCase());
}
