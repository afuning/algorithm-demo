// 满足两点：参数子集，返回新函数
// 作用：1. 参数复用；2. 提前返回；3. 延迟计算/运行。
// 实例：bind就是典型的柯里化
function curry (fn, ...arge1) {
  return (...arges) => {
    return fn.apply(this, [...arge1, ...arges])
  }
}

// 反柯里化
/******
 * 
 * 一个希望可以被其他对象调用的方法或函数，通过调用通用式返回一个函数，这个函数的第一个参数为要执行方法的对象，后面的参数为执行这个方法时需要传递的参数
 */

 function uncurrying (fn) {
   return function (...args) {
    return fn.call(...args);
  }
 }