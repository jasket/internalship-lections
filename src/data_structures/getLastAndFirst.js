/**
 * Написать функцию которая принимает массив и возвращает новый массив, состоящий
 * только из первого и последнего элементов исходного массива
 * Если входящий массив состоит меньше чем из 2 элементов - вернуть его без изменений
 * @param arr - массив элементов
 * @return {array} - массив с первым и последним элементом
 */
export function getLastAndFirst(arr) {
  if (!Array.isArray(arr)) throw new Error("Not an array");
  if (arr.length <= 2) return arr;
  return [arr.shift(), arr.pop()];
}
