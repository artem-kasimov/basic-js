const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value = ' ') {
    this.chain.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (this.chain[position - 1] === undefined) {
      this.chain = []
      throw new Error("You can't remove incorrect link!")
    }
    this.chain = [
      ...this.chain.slice(0, position - 1),
      ...this.chain.slice(position),
    ]
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    const out = this.chain.join('~~')
    this.chain = []
    return out
  },
}

module.exports = {
  chainMaker,
}
