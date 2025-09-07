import { Trip } from '@/lib/types/inquiry';

import { cities } from './cities';

function formatDate(date: Date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}
function formatTime() {
  const hour = String(Math.floor(Math.random() * 24)).padStart(2, '0');

  const minutesOptions = ['00', '15', '30', '45'];
  const minute = minutesOptions[Math.floor(Math.random() * minutesOptions.length)];

  return `${hour}:${minute}`;
}

function getTakenSeats() {
  const allSeats = Array.from({ length: 30 }, (_, i) => i + 1);

  const numberOfTakenSeats = Math.floor(Math.random() * 16) + 5;

  const shuffledSeats = allSeats.toSorted(() => 0.5 - Math.random());
  const takenSeats = shuffledSeats.slice(0, numberOfTakenSeats);

  const takenSeatsWithGender = [];
  for (let i = 0; i < takenSeats.length; i += 2) {
    const gender = Math.random() < 0.5 ? 'male' : 'female';
    takenSeatsWithGender.push({ seatNumber: takenSeats[i], gender });
    if (i + 1 < takenSeats.length) {
      takenSeatsWithGender.push({ seatNumber: takenSeats[i + 1], gender });
    }
  }

  return takenSeatsWithGender;
}

function getRandomPrice() {
  return Math.floor(Math.random() * 200) + 50;
}

const trips: Trip[] = [];

let idCounter = 1;
const today = new Date();

for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
  const tripDate = new Date(today);
  tripDate.setDate(today.getDate() + dayOffset);
  const dateStr = formatDate(tripDate);

  for (const from of cities) {
    for (const to of cities) {
      if (from.name !== to.name) {
        const tripCount = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < tripCount; i++) {
          trips.push({
            id: idCounter++,
            from,
            to,
            date: dateStr,
            fullSeats: getTakenSeats(),
            price: getRandomPrice(),
            time: formatTime(),
          });
        }
      }
    }
  }
}

export default trips;
