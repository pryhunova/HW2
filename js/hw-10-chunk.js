const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function chunk(arr, chunkSize) {
  let chunks = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
    if (!chunkSize) {
      return `Error`;
    }
    if (chunkSize === 1) {
      return arr;
    } else {
      chunks.push(arr.slice(i, i + chunkSize));
    }
  }

  return chunks;
}

const result = chunk(arr, 3); // 3 - размер каждого кусочка
console.log(result); // [[1,2,3], [4,5,6], [7,8,9], [10]]

const result2 = chunk(arr, 5); // 5 - размер каждого кусочка
console.log(result2); // [[1,2,3,4,5], [6,7,8,9,10]]

// const result = chunk(arr, 1); // 1 - размер каждого кусочка
// console.log(result); // [1,2,3,4,5,6,7,8,9,10] - то есть исходный массив

// const result = chunk(arr, 0); // 0 - размер каждого кусочка
// console.log(result); // написать пользователю в консоль что он не прав
