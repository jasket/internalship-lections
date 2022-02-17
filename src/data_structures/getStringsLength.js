/**
 * Сформировать массив, где каждый элемент равен длине строки элемента исходного массива
 * @param strings - массив строк
 * @return {array} - массив с длинами строк
 */
export function getStringsLength(strings) {
  if (!Array.isArray(strings)) throw new Error("Not an array");
  return strings.map((item) => item.length);
}
