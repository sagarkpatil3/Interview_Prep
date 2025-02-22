function findAllAnagrams(original, check) {
  // WRITE YOUR BRILLIANT CODE HERE
  let check_count = {};
  let window_count = {};
  let result = [];

  for (let char of check) {
    check_count[char] = (check_count[char] || 0) + 1;
  }

  let windowSize = check.length;
  for (let i = 0; i < windowSize; i++) {
    window_count[original[i]] = (window_count[original[i]] || 0) + 1;
  }

  let comp = compareHashMap(window_count, check_count);
  if (comp) {
    result.push(0);
  }

  for (let i = check.length; i < original.length; i++) {
    let leftPointerChar = original[i - windowSize];
    let rightPointerChar = original[i];

    window_count[leftPointerChar]--;
    if (window_count[leftPointerChar] === 0) {
      delete window_count[leftPointerChar];
    }

    window_count[rightPointerChar] = (window_count[rightPointerChar] || 0) + 1;

    if (compareHashMap(window_count, check_count)) {
      result.push(i);
    }
  }

  return result;
}

function compareHashMap(map1, map2) {
  for (let key in map2) {
    if (map1[key] != map2[key]) {
      return false;
    }
  }

  return true;
}
let result = findAllAnagrams("abab", "ab");
console.log(result);
