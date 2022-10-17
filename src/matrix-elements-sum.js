const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0

  for (let y = 0; y < matrix[0].length; y++) {
    for (let x = 0; x < matrix.length; x++) {
      if (matrix[x][y] === 0) {
        break
      } else {
        sum += matrix[x][y]
      }
    }
  }

  return sum
}

module.exports = {
  getMatrixElementsSum,
}
