const swap = (arr, i, j) => [ arr[j], arr[i] ] = [ arr[i], arr[j] ];

const myArr = [1,2,4,3,5];

swap(myArr, 2, 3); // [3, 4]
myArr // [1,2,3,4,5]