const excluded = [
  'render',
  'hasOwnProperty',
  'propertyIsEnumerable',
  'constructor',
  'toString',
  'toLocaleString',
  'valueOf',
  'hasOwnProperty',
  'isPrototypeOf'
]

const include = (func_name) => {
  if (func_name[0] === '_' || excluded.includes(func)) {
    return false
  }
  return true
}

const getFunctions = (object) => {
  const protype = Object.getPrototypeOf(object)
  const functions = Object.getOwnPropertyNames(protype)
  return functions.filter(func => include(func))
}

const binder = (object, ...only) => {
  const functions = only[0] ? only : getFunctions(object)
  functions.forEach((func) => {
    object[func] = object[func].bind(object)
  })
}

module.exports = binder
