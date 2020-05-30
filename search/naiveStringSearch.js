function naiveStringSearch(str, sub) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < sub.length; j++) {
      if (str[i + j] !== sub[j]) break;
      if (j === sub.length - 1) count++;
    }
  }

  return count;
}