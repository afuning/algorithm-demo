/**
 * 原理：执行一段时间内未再次触发则会真正执行fn，若时间未到再次触发，则清空计时器，重新计算时间
 *
 */
function debounce (fn, time) {
  let timeout = null
  return function (...arges) {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this, arges)
    }, time)
  }
}