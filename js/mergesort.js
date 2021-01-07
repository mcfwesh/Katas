const merge = (arr1, arr2) => {
  let newArr = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] < arr2[index2]) {
      newArr.push(arr1[index1]);
      index1++;
    } else {
      newArr.push(arr2[index2]);
      index2++;
    }
  }
  while (index1 < arr1.length) {
    newArr.push(arr1[index1]);
    index1++;
  }
  while (index2 < arr2.length) {
    newArr.push(arr2[index2]);
    index2++;
  }
  return newArr;
};

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
