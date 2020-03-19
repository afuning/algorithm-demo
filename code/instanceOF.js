/*****
 * 原理：判断当前对象的原型通过原型链查找最终能否等于
 * 重点：当查找到原型为null时停止查找
 */
function _instanceOf (L, R) {
  const rPrototype = Object.getPrototypeOf(R)
  while(true) {
    if (L.__proto__ === rPrototype) {
      return true
    } else if (l.prototype === null) {
      return true
    } else {
      L = L.__proto__ 
    }
  }
}