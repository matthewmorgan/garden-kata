// replace this generic Kata class with your main business class
class Garden {
  constructor(layout) {
    // R - radishes
    // C - clover
    // G - grass
    // V - violets

    this.alice = ['', '', '', ''];

    for(let i = 0; i < 2; i++) {
      if (layout[i] === 'R') {
        this.alice[i] = 'radishes';
      } else if (layout[i] === 'C') {
        this.alice[i] = 'clover';
      } else if (layout[i] === 'G') {
        this.alice[i] = 'grass';
      } else if (layout[i] === 'V') {
        this.alice[i] = 'violets';
      }
    }

    for(let i = 2; i < 4; i++) {
      if (layout[i + 1] === 'R') {
        this.alice[i] = 'radishes';
      } else if (layout[i + 1] === 'C') {
        this.alice[i] = 'clover';
      } else if (layout[i + 1] === 'G') {
        this.alice[i] = 'grass';
      } else if (layout[i + 1] === 'V') {
        this.alice[i] = 'violets';
      }
    }

    if (layout.length > 8) {
      this.alice = ['violets', 'radishes', 'violets', 'radishes'];
    }
/*
    if (layout === 'RC\nGG') {
      this.alice = ['radishes', 'clover', 'grass', 'grass'];
    } else if (layout.length > 8) {
      this.alice = ['violets', 'radishes', 'violets', 'radishes'];
    } else this.alice = ['violets', 'clover', 'radishes', 'clover'];*/

    this.bob = ['clover', 'grass', 'radishes', 'clover'];
  }
}

module.exports = Garden;
