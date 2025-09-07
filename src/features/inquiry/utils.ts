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
