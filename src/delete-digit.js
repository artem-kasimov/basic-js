const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = n.toString()

  let results = []

  for (let i = 0; i < n.length; i++) {
    results.push(Number(n.slice(0, i) + n.slice(i + 1)))
  }
  return Math.max(...results)
}

module.exports = {
  deleteDigit,
}
