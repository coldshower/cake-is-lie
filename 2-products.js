function products(arr) {
  var result = [];
  var left = 1;
  var right = 1;

  for (var i = 0; i < arr.length; i++) {
    result[i] = result[i] || left;
    left *= arr[i];
  }

  for (var j = arr.length - 1; j >= 0; j--) {
    result[j] *= right;
    right *= arr[j];
  }

  return result;
}