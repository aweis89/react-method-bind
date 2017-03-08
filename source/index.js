const excluded = [
  'render',
  'hasOwnProperty',
  'propertyIsEnumerable',
  'constructor',
  'toString',
  'toLocaleString',
  'valueOf',
  'hasOwnProperty',
  'isPrototypeOf']

const include = (func) => {
  if (func[0] === '_' || excluded.includes(func)) {
    return false
  }
  return true
}

const genFunctions = (object) => {
  const protype = Object.getPrototypeOf(object)
  const functions = Object.getOwnPropertyNames(protype)
  return functions.filter(func => include(func))
}

const binder = (object, ...only) => {
  const functions = only[0] ? only : genFunctions(object)

  functions.forEach((func) => {
    object[func] = object[func].bind(object)
  })
}

module.exports = binder
