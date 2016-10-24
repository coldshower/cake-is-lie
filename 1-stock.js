function stock(arr) {
  var max = 0;
  var maxFirst = null;
  var maxSecond = null;
  var currentMinIndex = null;

  for (var i = 0; i < arr.length; i++) {
    if (currentMinIndex === null) {
      currentMinIndex = i;
    }

    var current = arr[i] - arr[currentMinIndex];
    if (current > max) {
      max = current;
      maxFirst = currentMinIndex;
      maxSecond = i;
    }

    if (arr[i] < arr[currentMinIndex]) {
      currentMinIndex = i;
    }
  }

  return arr[maxSecond] - arr[maxFirst];
}