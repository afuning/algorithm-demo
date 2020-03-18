// 1. 接收一个构造函数，构造函数相关的属性
// 2. 判断该构造函数是否符合要求
// 3. 生成一个新的对象，并将该对象的__proto__指向构造函数的原型
// 4. 执行构造函数，将this指向新的对象，判断执行结果，如果是对象的话就返回结果，否则返回新的对象
function _new (Con, ...arges) {
  if (typeof Con !== 'function') throw TypeError(`${Con} should be function`)
  let obj = {}
  // obj.__proto__ = Con.constructor
  // obj = Object.create(Con.prototype)
  Object.setPrototypeOf(obj, Con.prototype)
  let result = Con.apply(obj, args)
  return result instanceof Object ? result : obj
}