const desckAmount = require("./desckAmount");

describe("Testing the counting desck algorithm", () => {
  test("desckAmount return 2 desck for the first set of values", () => {
    const cards = [
      {
        suit: "hearts",
        value: 2,
      },
      {
        suit: "hearts",
        value: 9,
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "diamonds",
        value: 7,
      },
      {
        suit: "diamonds",
        value: 8,
      },
      {
        suit: "diamonds",
        value: 9,
      },
      {
        suit: "diamonds",
        value: 10,
      },
      {
        suit: "clubs",
        value: 3,
      },
      {
        suit: "clubs",
        value: 4,
      },
      {
        suit: "clubs",
        value: 5,
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "hearts",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "diamonds",
        value: 2,
      },
      {
        suit: "diamonds",
        value: 3,
      },
      {
        suit: "diamonds",
        value: 7,
      },
      {
        suit: "diamonds",
        value: 4,
      },
      {
        suit: "clubs",
        value: 6,
      },
      {
        suit: "clubs",
        value: 2,
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "clubs",
        value: 2,
      },
      {
        suit: "clubs",
        value: 8,
      },
      {
        suit: "clubs",
        value: 9,
      },
      {
        suit: "clubs",
        value: 10,
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "hearts",
        value: 8,
      },
      {
        suit: "clubs",
        value: "K",
      },
      {
        suit: "clubs",
        value: "A",
      },
      {
        suit: "spades",
        value: 4,
      },
      {
        suit: "hearts",
        value: 10,
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "clubs",
        value: 7,
      },
      {
        suit: "diamonds",
        value: 5,
      },
      {
        suit: "diamonds",
        value: 6,
      },
      {
        suit: "spades",
        value: 2,
      },
      {
        suit: "spades",
        value: 3,
      },
      {
        suit: "spades",
        value: 4,
      },
      {
        suit: "spades",
        value: 5,
      },
      {
        suit: "spades",
        value: 6,
      },
      {
        suit: "spades",
        value: 7,
      },
      {
        suit: "spades",
        value: 8,
      },
      {
        suit: "spades",
        value: 9,
      },
      {
        suit: "spades",
        value: 10,
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "hearts",
        value: 5,
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "hearts",
        value: 2,
      },
      {
        suit: "hearts",
        value: 3,
      },
      {
        suit: "hearts",
        value: 3,
      },
      {
        suit: "hearts",
        value: 4,
      },
      {
        suit: "hearts",
        value: 5,
      },
      {
        suit: "hearts",
        value: 6,
      },
      {
        suit: "hearts",
        value: 7,
      },
      {
        suit: "hearts",
        value: 8,
      },
      {
        suit: "hearts",
        value: 4,
      },
      {
        suit: "hearts",
        value: 5,
      },
      {
        suit: "hearts",
        value: 6,
      },
      {
        suit: "hearts",
        value: 7,
      },
      {
        suit: "hearts",
        value: 9,
      },
      {
        suit: "hearts",
        value: 10,
      },
      {
        suit: "hearts",
        value: 10,
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "hearts",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "diamonds",
        value: 2,
      },
      {
        suit: "diamonds",
        value: 3,
      },
      {
        suit: "diamonds",
        value: 4,
      },
      {
        suit: "diamonds",
        value: 5,
      },
      {
        suit: "diamonds",
        value: 6,
      },
      {
        suit: "diamonds",
        value: 7,
      },
      {
        suit: "diamonds",
        value: 8,
      },
      {
        suit: "diamonds",
        value: 9,
      },
      {
        suit: "diamonds",
        value: 10,
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "clubs",
        value: 2,
      },
      {
        suit: "clubs",
        value: 3,
      },
      {
        suit: "clubs",
        value: 4,
      },
      {
        suit: "clubs",
        value: 5,
      },
      {
        suit: "clubs",
        value: 6,
      },
      {
        suit: "clubs",
        value: 7,
      },
      {
        suit: "clubs",
        value: 8,
      },
      {
        suit: "clubs",
        value: 9,
      },
      {
        suit: "clubs",
        value: 10,
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "K",
      },
      {
        suit: "clubs",
        value: "A",
      },
      {
        suit: "spades",
        value: 2,
      },
      {
        suit: "spades",
        value: 3,
      },
      {
        suit: "spades",
        value: 4,
      },
      {
        suit: "spades",
        value: 5,
      },
      {
        suit: "spades",
        value: 6,
      },
      {
        suit: "spades",
        value: 7,
      },
      {
        suit: "spades",
        value: 8,
      },
      {
        suit: "spades",
        value: 9,
      },
      {
        suit: "spades",
        value: 10,
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "spades",
        value: "A",
      },
    ];
    expect(desckAmount(cards)).toBe(2);
  });

  test("desckAmount return 0 desck for the second set of values", () => {
    const cards = [
      {
        suit: "spades",
        value: "8",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "hearts",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "spades",
        value: "8",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "clubs",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "hearts",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "clubs",
        value: "K",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "clubs",
        value: "K",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "clubs",
        value: "5",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "clubs",
        value: "5",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "clubs",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "clubs",
        value: "3",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "clubs",
        value: "3",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "4",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "spades",
        value: "8",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "clubs",
        value: "3",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "clubs",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "4",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "clubs",
        value: "5",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "clubs",
        value: "3",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "clubs",
        value: "3",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "clubs",
        value: "5",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "spades",
        value: "8",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "10",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "hearts",
        value: "9",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "spades",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "hearts",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "clubs",
        value: "A",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "hearts",
        value: "9",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "5",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "hearts",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "clubs",
        value: "A",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "spades",
        value: "8",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "clubs",
        value: "5",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "clubs",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "10",
      },
      {
        suit: "spades",
        value: "8",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "hearts",
        value: "10",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "hearts",
        value: "7",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "4",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "clubs",
        value: "5",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "hearts",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "hearts",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "spades",
        value: "8",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "clubs",
        value: "A",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "spades",
        value: "8",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "clubs",
        value: "A",
      },
      {
        suit: "hearts",
        value: "9",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "10",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "hearts",
        value: "9",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "clubs",
        value: "5",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "clubs",
        value: "5",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "spades",
        value: "2",
      },
      {
        suit: "hearts",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "spades",
        value: "8",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "spades",
        value: "2",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "spades",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "5",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "hearts",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "clubs",
        value: "A",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "hearts",
        value: "10",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "spades",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "clubs",
        value: "A",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "4",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "clubs",
        value: "3",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "clubs",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "4",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "clubs",
        value: "5",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "spades",
        value: "8",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "hearts",
        value: "9",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "spades",
        value: "8",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "10",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "clubs",
        value: "5",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "4",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "hearts",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "clubs",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "spades",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "10",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "spades",
        value: "2",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "4",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "spades",
        value: "8",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "clubs",
        value: "5",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "spades",
        value: "8",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "clubs",
        value: "K",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "hearts",
        value: "7",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "spades",
        value: "8",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "clubs",
        value: "5",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "clubs",
        value: "5",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "clubs",
        value: "A",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "4",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "hearts",
        value: "9",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "clubs",
        value: "3",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "4",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "clubs",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "4",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "clubs",
        value: "3",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "spades",
        value: "8",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "clubs",
        value: "5",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "clubs",
        value: "A",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "spades",
        value: "8",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "clubs",
        value: "5",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "spades",
        value: "8",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "6",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "clubs",
        value: "A",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "clubs",
        value: "5",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "spades",
        value: "8",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "hearts",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "clubs",
        value: "A",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "A",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "spades",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "clubs",
        value: "5",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "clubs",
        value: "K",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "hearts",
        value: "7",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "hearts",
        value: "7",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "4",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "spades",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "4",
      },
      {
        suit: "clubs",
        value: "5",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "clubs",
        value: "A",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "4",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "clubs",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "clubs",
        value: "3",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "clubs",
        value: "A",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "hearts",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "10",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "clubs",
        value: "5",
      },
      {
        suit: "clubs",
        value: "A",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "4",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "10",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "hearts",
        value: "7",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "4",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "hearts",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "clubs",
        value: "A",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "hearts",
        value: "9",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "clubs",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "hearts",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "hearts",
        value: "7",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "clubs",
        value: "A",
      },
      {
        suit: "hearts",
        value: "7",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "hearts",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "clubs",
        value: "5",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "clubs",
        value: "A",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "clubs",
        value: "A",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "spades",
        value: "8",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "clubs",
        value: "A",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "clubs",
        value: "3",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "6",
      },
      {
        suit: "clubs",
        value: "5",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "spades",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "hearts",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "clubs",
        value: "3",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "clubs",
        value: "5",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "hearts",
        value: "7",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "spades",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "5",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "hearts",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "clubs",
        value: "A",
      },
      {
        suit: "hearts",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "hearts",
        value: "7",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "clubs",
        value: "A",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "spades",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "4",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "clubs",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "10",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "clubs",
        value: "A",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "7",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "clubs",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "10",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "hearts",
        value: "A",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "Q",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "hearts",
        value: "6",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "clubs",
        value: "4",
      },
      {
        suit: "hearts",
        value: "J",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "clubs",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "clubs",
        value: "3",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "spades",
        value: "7",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "hearts",
        value: "5",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "clubs",
        value: "Q",
      },
      {
        suit: "spades",
        value: "Q",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "3",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "spades",
        value: "K",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "spades",
        value: "5",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "A",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "diamonds",
        value: "9",
      },
      {
        suit: "clubs",
        value: "9",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "spades",
        value: "J",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "spades",
        value: "9",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "J",
      },
      {
        suit: "spades",
        value: "10",
      },
      {
        suit: "hearts",
        value: "K",
      },
      {
        suit: "spades",
        value: "3",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "hearts",
        value: "7",
      },
      {
        suit: "clubs",
        value: "7",
      },
      {
        suit: "diamonds",
        value: "8",
      },
      {
        suit: "hearts",
        value: "3",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "2",
      },
      {
        suit: "diamonds",
        value: "K",
      },
      {
        suit: "hearts",
        value: "8",
      },
      {
        suit: "clubs",
        value: "10",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "clubs",
        value: "J",
      },
      {
        suit: "diamonds",
        value: "10",
      },
      {
        suit: "spades",
        value: "6",
      },
      {
        suit: "clubs",
        value: "6",
      },
      {
        suit: "hearts",
        value: "2",
      },
      {
        suit: "clubs",
        value: "8",
      },
      {
        suit: "diamonds",
        value: "J",
      },
    ];
    expect(desckAmount(cards)).toBe(0);
  });
});
