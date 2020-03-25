/***
 * 注意：
 *  1. 检测this是否为function类型
 *  2. 生成一个function，通过apply绑定
 *  3. 新生成的functio需要继承绑定对象
 */
Function.prototype.bind = function (that, ...arges) {
  if (typeof this !== 'function') return TypeError('type error')
  let fn = () => {}
  let self = this
  const bindFunc = function (...arges2) {
    // 此时fn已经是继承了self的原型
    // 因此如果当前this instanceof fn则说明了该bindFunc已被new，因此this指向new的对象
    self.apply(this instanceof fn ? this : that, [...arges, arges2])
  }
  fn.prototype = self.prototype
  // bindFunc继承self
  bindFunc.prototype = new fn()
  return bindFunc
}