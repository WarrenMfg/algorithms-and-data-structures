function binarySearch(arr, target) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let cur = arr[mid];

    if (cur < target) min = mid + 1;
    else if (cur > target) max = mid - 1;
    else return mid;
  }

  return -1;
}

function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);

  while(arr[middle] !== elem && start <= end) {
      if(elem < arr[middle]) end = middle - 1;
      else start = middle + 1;

      middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === elem ? middle : -1;
}