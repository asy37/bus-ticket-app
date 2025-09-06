export const getSeatColor = (seatNumber: number, fullSeat: number[]) => {
  const isFull = fullSeat.includes(seatNumber);
  if (!isFull) {
    return 'bg-gray-300';
  }
  const index = fullSeat.indexOf(seatNumber);
  return index % 2 === 0 ? 'bg-blue-400' : 'bg-pink-400';
};

export const seatLeftArray = Array.from({ length: 16 }, (_, i) => ({
  id: i + 16,
  seatNumber: i + 16,
}));

export const seatRightArray = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  seatNumber: i + 1,
}));
