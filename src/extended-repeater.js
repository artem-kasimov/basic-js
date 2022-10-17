const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let separator = options.separator || '+'
  let repeatTimes = options.repeatTimes || 1
  let additionRepeatTimes = options.additionRepeatTimes || 1
  let additionSeparator = options.additionSeparator || '|'
  let addition = ''
  let string = ''

  if (options.hasOwnProperty('addition')) {
    options.addition = String(options.addition)
  }

  if (options.addition) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      if (i === additionRepeatTimes - 1) {
        addition += options.addition
        continue
      }
      addition += options.addition + additionSeparator
    }
  }

  for (let i = 0; i < repeatTimes; i++) {
    if (i === repeatTimes - 1) {
      string += str + addition
      continue
    }
    string += str + addition + separator
  }

  return string
}

module.exports = {
  repeater,
}
