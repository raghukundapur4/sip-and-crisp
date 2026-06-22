export interface HoursEntry {
  day: string;
  open: string;
  close: string;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  landmark?: string;
  phone: string;
  hours: HoursEntry[];
  mapEmbedUrl: string;
  mapLink: string;
  isOpen: boolean;
}

const address =
  '16th Main Rd, BTM 2nd Stage, Kuvempu Nagar, BTM Layout 2nd Stage, BTM Layout, Bengaluru, Karnataka 560076';

const mapQuery = encodeURIComponent(address);

export const locations: Location[] = [
  {
    id: 'btm-layout',
    name: 'Sip & Crisp — BTM Layout',
    address,
    landmark: '16th Main Rd, Kuvempu Nagar',
    phone: '8549835696',
    hours: [{ day: 'Mon – Sun', open: '11:00 AM', close: '12:00 AM' }],
    mapEmbedUrl: `https://maps.google.com/maps?q=${mapQuery}&hl=en&z=16&output=embed`,
    mapLink: `https://maps.google.com/?q=${mapQuery}`,
    isOpen: true,
  },
];

export const primaryLocation = locations[0];
