import Ship from './ship';

const SIZE = 10;

const Gameboard = (playerName, board, missedShots) => ({
  board: [],
  missedShots: [],

  initialize() {
    for (let i = 0; i < SIZE; i += 1) {
      this.board[i] = [];
      this.missedShots[i] = [];
      for (let j = 0; j < SIZE; j += 1) {
        this.board[i][j] = null;
        this.missedShots[i][j] = false;
      }
    }
  },

  //   placeShip(ship, row, column, isVertical = true) {
  //     if (isVertical) {
  //       for (let i = 0; i < ship.length; i++) {
  //         this.board[row + i][column] = ship;
  //       }
  //     } else {
  //       for (let i = 0; i < ship.length; i++) {
  //         this.board[row][column + i] = ship;
  //       }
  //     }
  //   },
  // });

  placeShip(ship, row, column) {
    for (let i = 0; i < ship.length; i++) {
      this.board[row + i][column] = ship;
    }
  },
});

const newShip = Ship(3);
console.log(newShip.length);
const newBoard = Gameboard('me');
newBoard.initialize();
newBoard.placeShip(newShip, 6, 5);

export default Gameboard;
