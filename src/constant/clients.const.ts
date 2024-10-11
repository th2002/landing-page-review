// clients.ts
export interface Client {
  name: string;
  logo: string;
}

export const CLIENTS: Client[] = [
  { name: 'Booking', logo: '/clients/booking.png' },
  { name: 'Google', logo: '/clients/google.png' },
  { name: 'IMDEX', logo: '/clients/imdex.png' },
  { name: 'JustFab', logo: '/clients/justfab.png' },
  { name: 'KFC', logo: '/clients/kfc.png' },
  { name: 'Maersk', logo: '/clients/maersk.png' },
  { name: 'Panasonic', logo: '/clients/panasonic.png' },
  { name: 'Pigi', logo: '/clients/pigi.png' },
  { name: 'Simon', logo: '/clients/simon.png' },
  { name: 'Tinder', logo: '/clients/tinder.png' },
  { name: 'Wati', logo: '/clients/wati.png' },
];
