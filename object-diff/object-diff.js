const diff = (newCode, oldCode) => {
  const result = []

  const getFlatObj = (path, obj) => {
    path += path === '' ? '' : '.'
    let flatObj = {}
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'object') {
        flatObj = { ...flatObj, ...getFlatObj(path + key, obj[key]) }
      } else {
        flatObj[path + key] = obj[key]
      }
    })
    return flatObj
  }

  oldCode = getFlatObj('', oldCode)
  newCode = getFlatObj('', newCode)

  //Removed
  Object.keys(oldCode).forEach(oldKey => {
    if(!newCode[oldKey]) {
      result.push(['-', oldKey, oldCode[oldKey]])
    }
  })

  //Added
  Object.keys(newCode).forEach(newKey => {
    if(!oldCode[newKey]) {
      result.push(['+', newKey, newCode[newKey]])
    }
  })

  return result
}

module.exports = diff