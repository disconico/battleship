const Ship = (length, hits) => ({
  length,
  hits: [],

  hit(position) {
    if (
      this.hits.includes(position) ||
      position < 0 ||
      position >= this.length
    ) {
      return;
    } else {
      this.hits.push(position);
    }
  },

  isSunk() {
    return this.hits.length === this.length;
  },
});

const newShip = Ship(3);

export default Ship;
