const swap = (arr, i, j) => [arr[j], arr[i]] = [arr[i], arr[j]];

function bubbleSort(arr) {
  let noSwap;

  for (let i = arr.length - 1; i >= 0; i--) {
    noSwap = true;

    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }

    if (noSwap) break;
  }

  return arr;
}