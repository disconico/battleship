import Gameboard from '../gameboard';
import Ship from '../ship';

describe('Gameboard', () => {
  let gameboard;
  let ship;

  beforeEach(() => {
    gameboard = Gameboard();
  });

  test('Check initialization', () => {
    gameboard.initialize();
    expect(gameboard.board.length).toBe(10);
  });

  test('Check if ship is placed', () => {
    gameboard.initialize();
    ship = Ship(3);
    gameboard.placeShip(ship, 3, 2);
    expect(gameboard.board[3][2]).toBe(ship);
  });
});
