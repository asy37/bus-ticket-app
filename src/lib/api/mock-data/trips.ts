import { Trip } from '@/lib/types/inquiry';

import { cities } from './cities';

function formatDate(date: Date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}
function formatTime() {
  // 0–23 arasında saat
  const hour = String(Math.floor(Math.random() * 24)).padStart(2, '0');

  // Dakikalar sadece [00, 15, 30, 45]
  const minutesOptions = ['00', '15', '30', '45'];
  const minute = minutesOptions[Math.floor(Math.random() * minutesOptions.length)];

  return `${hour}:${minute}`;
}

function getTakenSeats() {
  const allSeats = Array.from({ length: 30 }, (_, i) => i + 1); // 1'den 30'a kadar tüm koltuklar

  // Rastgele bir dolu koltuk sayısı belirle (örneğin 5 ile 20 arası)
  const numberOfTakenSeats = Math.floor(Math.random() * 16) + 5;

  // Koltukları rastgele sırala ve ilk belirlenen sayı kadarını al
  const takenSeats = allSeats
    .sort(() => 0.5 - Math.random()) // Rastgele sıralama
    .slice(0, numberOfTakenSeats); // Belirlenen sayıda koltuğu al

  // İstenen formatta bir diziye dönüştür
  return takenSeats.map((seatNumber) => ({ seatNumber }));
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
        const tripCount = Math.floor(Math.random() * 3) + 1; // 1 ile 3 arası sefer
        for (let i = 0; i < tripCount; i++) {
          trips.push({
            id: idCounter++,
            from,
            to,
            date: dateStr,
            availableSeats: getTakenSeats(),
            price: getRandomPrice(),
            time: formatTime(),
          });
        }
      }
    }
  }
}

export default trips;
