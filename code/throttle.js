function throttle (fn, time) {
  let timeout = null
  return function (...arges) {
    if (timeout) return
    timeout = setTimeout(() => {
      fn.apply(this, arges)
      timeout = null
    }, time)
  }
}