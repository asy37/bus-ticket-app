export const genderColor = (gender: string | undefined) => {
  if (gender === undefined) {
    return 'bg-gray-300';
  }
  return gender === 'male' ? 'bg-blue-400' : 'bg-pink-400';
};

export const seatLeftArray = Array.from({ length: 16 }, (_, i) => ({
  id: i + 17,
  seatNumber: i + 17,
}));

export const seatRightArray = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  seatNumber: i + 1,
}));

export const seatPairs: [number, number][] = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [9, 10],
  [11, 12],
  [13, 14],
  [15, 16],
  [17, 18],
  [19, 20],
  [21, 22],
  [23, 24],
  [25, 26],
  [27, 28],
  [29, 30],
  [31, 32],
];

export const isEven = (seat: number) => {
  if (seat % 2 === 0) {
    return true; // Çift
  } else {
    return false; // Tek
  }
};

export const findPair = (seat: number) => {
  return seatPairs.find(([a, b]) => a === seat || b === seat);
};
