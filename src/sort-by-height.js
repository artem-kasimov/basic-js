const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let positions = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      positions.push(i)
    }
  }

  arr.sort((a, b) => a - b)

  if (positions.length) {
    for (let i = positions.length - 1; i >= 0; i--) {
      if (arr[positions[i]] !== -1) {
        for (let y = 0; y < positions[i]; y++) {
          let temp = arr[y + 1]
          arr[y + 1] = arr[y]
          arr[y] = temp
        }
      }
    }
  }

  return arr
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))

module.exports = {
  sortByHeight,
}
