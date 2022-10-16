const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`)
  }

  let outputArr = [...arr]

  let discard = false

  for (let i = 0; i < outputArr.length; i++) {
    if (typeof outputArr[i] === 'number') {
      continue
    }

    if (outputArr[i] === '--discard-next') {
      outputArr = [...outputArr.slice(0, i), ...outputArr.slice(i + 2)]
      discard = true
    }

    if (outputArr[i] === '--double-next') {
      if (i === arr.length - 1) {
        outputArr.pop()
        continue
      }
      outputArr = [
        ...outputArr.slice(0, i),
        outputArr[i + 1],
        ...outputArr.slice(i + 1),
      ]
    }

    if (outputArr[i] === '--discard-prev') {
      if (i === 0) {
        outputArr = outputArr.slice(1)
        continue
      }

      if (discard) {
        outputArr = [...outputArr.slice(0, i), ...outputArr.slice(i + 1)]
      } else {
        outputArr = [...outputArr.slice(0, i - 1), ...outputArr.slice(i + 1)]
      }
    }

    if (outputArr[i] === '--double-prev') {
      if (i === 0) {
        outputArr = outputArr.slice(1)
        continue
      }

      if (discard) {
        outputArr = [...outputArr.slice(0, i), ...outputArr.slice(i + 1)]
      } else {
        outputArr = [
          ...outputArr.slice(0, i),
          outputArr[i - 1],
          ...outputArr.slice(i + 1),
        ]
      }
    }

    discard = false
  }

  return outputArr
}

module.exports = {
  transform,
}
