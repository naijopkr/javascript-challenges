const parensAreBalanced = (input) => {
  const charMap = {
    40: 41,
    91: 93,
    123: 125,
    closeChars: [41, 93, 125]
  }
  let lookingFor = []

  for (var i = 0; i < input.length; i++) {
    if (charMap[input.charCodeAt(i)]) {
      lookingFor.push(charMap[input.charCodeAt(i)])
    } else if (lookingFor[lookingFor.length - 1] === input.charCodeAt(i)) {
      lookingFor.pop()
    } else if (charMap.closeChars.indexOf(input.charCodeAt(i)) !== -1) {
      return false
    }
  }
  return lookingFor.length === 0
}

module.exports = parensAreBalanced
