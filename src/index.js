module.exports = function reverse(n) {
  const num = Math.abs(n);
  const arr = String(num).split('');
  let i = arr.length - 1;
  while (arr[i] === '0') {
    arr.pop();
    i -= 1;
  }
  return Number(arr.reverse().join(''));
};
