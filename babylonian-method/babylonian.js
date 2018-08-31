const squareRoot = (radicand) => {
  if (isNaN(radicand) || radicand < 0) {
    return NaN
  }
  const precision = 0.000000000000001
  let lastGuess = 0
  let guess = radicand/4
  while (radicand/guess !== guess && Math.abs(radicand/guess - guess) >= precision) {
    if (radicand/guess > guess) {
      lastGuess = guess
      guess = (radicand + guess)/2
    } else {
      guess = guess - (guess - lastGuess)/2
    }
  }
  return radicand/guess
}

module.exports = squareRoot
