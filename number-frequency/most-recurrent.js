const mostRecurrent = (set) => {
  let moreRecurrent = null
  let numbers = {}
  set.forEach(number => {
    if (numbers[number]) {
      numbers[number]++
    } else {
      numbers[number] = 1
    }
  })
  for (number in numbers) {
    if (!moreRecurrent) {
      moreRecurrent = number
    } else if (numbers[number] > numbers[moreRecurrent]) {
      moreRecurrent = number
    }
  }

  return Number(moreRecurrent)
}

module.exports = mostRecurrent
