const addEventing = (obj) => {
  let events = {}
  return (
    {
      value: obj,
      on: (name, callback) => {
        if (callback && typeof name === 'string') {
          if (!events[name]) {
            events[name] = []
          }
          events[name].push(callback)
        }
      },
      trigger: (name, ...args) => {
        if (events[name]) {
          events[name].forEach(callback => {
            callback(...args)
          })
        }
      }
    }
  )
}

module.exports = addEventing
