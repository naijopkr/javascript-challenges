const targetSumExistsInTwoNumbers = (list, target) => {
  for (var i = 0; i < list.length; i++) {
    for (var j = i + 1; j <= list.length; j++)
      if (testSumInTwoNumbers([list[i], list[j]], target)) {
        return true;
      }
  }
  return false;
}

const testSumInTwoNumbers = (list, target) => {
  var a = list[0];
  var b = list[1];
  var sum = a + b;
  var x = 1;
  var y = 1;

  while (x + y <= target && sum !== target) {
    sum = x === y ? ++x*a + y*b : x*a + ++y*b;
  }

  return sum === target;
}

const testSumIhreeNumbers = (list, target) => {
  var a = list[0];
  var b = list[1];
  var c = list[2];
  var sum = a + b + c;
  var aux = 0;
  var x = 2;
  var y = 1;
  var z = 1;

  while (x + y + z <= target && sum !== target) {
    switch (aux) {
      case 0:
        sum = x*a + y*b + z*c;
        aux++;
        break;
      case 1:
        sum = x*a + ++y*b + z*c;
        aux++;
        break;
      case 2:
        sum = x*a + y*b + ++z*c;
        aux++;
        break;
      default:
        sum = (x++-1)*a + y*b + z*c;
        aux = 0;
        break;
    }
  }

  return sum === target;
}

const targetSumExistsInThreeNumbers = (list, target) => {
  for (var i = 0; i < list.length-1; i++) {
    for (var j = i + 1; j < list.length; j++) {
      for (var k = j + 1; k <= list.length; k++) {
        if (testSumIhreeNumbers([list[i], list[j], list[k]], target)) {
          return true;
        }
      }
    }
  }
  return false;
}

module.exports = {
  targetSumExistsInTwoNumbers,
  targetSumExistsInThreeNumbers
}
