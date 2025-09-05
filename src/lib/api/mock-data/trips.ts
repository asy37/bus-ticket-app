import { Trip } from '@/lib/types/inquiry';

import { cities } from './cities';

function formatDate(date: Date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

function getRandomSeats() {
  return Math.floor(Math.random() * 40) + 10;
}

function getRandomPrice() {
  return Math.floor(Math.random() * 200) + 50;
}

// explicit type annotation ekliyoruz
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
        trips.push({
          id: idCounter++,
          from,
          to,
          date: dateStr,
          availableSeats: getRandomSeats(),
          price: getRandomPrice(),
        });
      }
    }
  }
}

export default trips;
