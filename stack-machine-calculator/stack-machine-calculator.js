const stackMachineCalculator = (instructions) => {
  var stack = instructions.split(' ')
  var result = []
  for (const el of stack) {
    switch (el) {
      case 'DUP':
        result.push(result[result.length-1])
        break
      case 'POP':
        result.pop()
        break
      case '+':
        var first = result.pop()
        var second = result.pop()
        result.push(Number(first) + Number(second))
        break
      case '-':
        var first = result.pop()
        var second = result.pop()
        result.push(Number(first) - Number(second))
        break
      default:
        result.push(el)
        break
    }
  }

  return Number(result.pop())
}

module.exports = stackMachineCalculator
