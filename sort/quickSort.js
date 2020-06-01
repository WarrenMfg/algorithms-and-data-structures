function quickSort(arr, start = 0, end = arr.length) {
  if (start < end) {
    let newPivotIndex = pivot(arr, start, end);
    quickSort(arr, start, newPivotIndex);
    quickSort(arr, newPivotIndex + 1, end);
  }

  return arr;
}

const swap = (arr, i, j) => [arr[j], arr[i]] = [arr[i], arr[j]];

function pivot(arr, start, end) {
  let lesser = start;

  for (let i = start; i < end; i++) {
    if (arr[i] < arr[start]) {
      lesser++;
      if (i !== lesser) swap(arr, i, lesser);
    }
  }

  if (start !== lesser) swap(arr, start, lesser);
  return lesser;
}
