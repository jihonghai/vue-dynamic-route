function toArray(val) {
  return (typeof val) === 'string' || (typeof val) === 'number' ? [val] : val;
}
export function compare(one, two) {
  let i, ii, key;
  if (Object.prototype.toString.call(one) === '[object Object]' && Object.prototype.toString.call(two) === '[object Object]') {
    for (key in one) {
      if (compare(one[key], two[key])) {
        return true;
      }
    }
    return false;
  }
  one = toArray(one);
  two = toArray(two);
  if (!one || !two || one.constructor !== Array || two.constructor !== Array) {
    return false;
  }
  for (i = 0, ii = one.length; i < ii; i++) {
    if (two.indexOf(one[i]) >= 0) {
      return true;
    }
  }
  return false;
}
