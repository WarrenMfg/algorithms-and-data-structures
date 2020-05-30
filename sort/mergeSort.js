function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor( arr.length / 2 );
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return mergeTwoSortedArrays(left, right);
}


function mergeTwoSortedArrays(arrL, arrR) {
  let l = 0;
  let r = 0;
  let result = [];

  // while both have length, push into result
  while (l < arrL.length && r < arrR.length) {
    if (arrL[l] <= arrR[r]) {
      result.push(arrL[l]);
      l++;
    } else {
      result.push(arrR[r]);
      r++;
    }
  }

  // only one of these will run
  while (l < arrL.length) {
    result.push(arrL[l]);
    l++;
  }

  while (r < arrR.length) {
    result.push(arrR[r]);
    r++;
  }

  return result;
}