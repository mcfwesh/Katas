function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i; j > 0; j--) {
      if (arr[j] >= arr[j - 1]) {
        break;
      } else {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
    console.log(arr);
  }
}
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const inserted = arr[i];
    let j = i;
    for (j; j > 0 && arr[j - 1] > inserted; j--) {
      arr[j] = arr[j - 1];
    }

    arr[j] = inserted;
  }

  return arr;
};
