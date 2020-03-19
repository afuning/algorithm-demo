function debounce (fn, time) {
  let timeout = null
  return function (...arges) {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this, arges)
    }, time)
  }
}