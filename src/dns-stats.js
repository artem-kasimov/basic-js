const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let stats = {}

  let formattedDomains = domains.map(dom => {
    return '.' + dom.split('.').reverse().join('.')
  })

  formattedDomains.forEach(dom => {
    let dotPos = []

    for (let i = 0; i < dom.length; i++) {
      if (dom[i] === '.') {
        dotPos.push(i)
      }
    }

    for (let i = dotPos.length - 1; i >= 0; i--) {
      let domain = dom
      if (dotPos[i] !== 0) {
        domain = dom.slice(0, dotPos[i])
      }
      if (!stats.hasOwnProperty(domain)) {
        stats[domain] = 1
      } else {
        stats[domain]++
      }
    }
  })

  return stats
}

module.exports = {
  getDNSStats,
}
