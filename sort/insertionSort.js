const swap = (arr, i, j) => [arr[j], arr[i]] = [arr[i], arr[j]];

function insertionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j] < arr[j - 1]) swap(arr, j, j - 1);
      else break;
    }
  }
  return arr;
}