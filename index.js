function shuffled(Array) {
  var expectedArray = [];
  for (i = 0; i < Array.length - 1; i++) {
    if (i % 2 == 0) {
      if (Array[i] <= Array[i + 1]) {
        expectedArray.push(Array[i]);
      } else {
        expectedArray.push(Array[i + 1]);
        x = Array[i];
        Array[i] = Array[i + 1];
        Array[i + 1] = x;
      }
    } else {
      if (Array[i] >= Array[i + 1]) {
        expectedArray.push(Array[i]);
      } else {
        expectedArray.push(Array[i + 1]);
        let x = Array[i];
        Array[i] = Array[i + 1];
        Array[i + 1] = x;
      }
    }
    if (i === Array.length - 2) expectedArray.push(Array[Array.length - 1]);
  }

  return expectedArray;
}

console.log(shuffled([2, 1, 5, 3, 11, 7]));
