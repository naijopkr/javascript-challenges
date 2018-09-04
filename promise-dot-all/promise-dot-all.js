const all = async (promises) => {
  var output = []
  for (const promise of promises) {
    var el = await new Promise((resolve, reject) => {
      try {
        resolve(promise)
      } catch (e) {
        reject(promise)
      }
    })
    output.push(el)
  }
  return output
}

module.exports = all
