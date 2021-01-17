const get = (key) => {
  const stringValue = localStorage.getItem(key)
  const value = JSON.parse(stringValue)
  return value
}

const set = (key, value) => {
  let stringified = JSON.stringify(value)
  localStorage.setItem(stringified)
}

const updater = { get, set }

export default updater
