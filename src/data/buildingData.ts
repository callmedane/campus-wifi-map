export interface PowerSocket {
  x: number; // percentage
  y: number; // percentage
  location: string;
  count: number;
}

export interface SignalZone {
  x: number;
  y: number;
  radius: number;
  strength: 'excellent' | 'good' | 'weak';
  label: string;
}

export interface FloorData {
  id: string;
  name: string;
  floorNumber: string;
  powerSockets: PowerSocket[];
  signalZones: SignalZone[];
  rooms?: string[];
}

export interface BuildingData {
  floors: FloorData[];
  totalSockets: number;
  totalSignalZones: number;
}

export const buildingData: Record<'building9' | 'building5', BuildingData> = {
  building9: {
    totalSockets: 290,
    totalSignalZones: 13,
    floors: [
      {
        id: 'first',
        name: '1st Floor',
        floorNumber: '1',
        rooms: ['Q-9101', 'Q-9102', 'Q-9103', 'Q-9104', 'Q-9105', 'Q-9106', 'Q-9107', 'Q-9108', 'Q-9109', 'Q-9110'],
        powerSockets: [
          { x: 20, y: 25, location: 'Q-9101 front', count: 8 },
          { x: 40, y: 28, location: 'Q-9102 stations', count: 16 },
          { x: 60, y: 22, location: 'Q-9103 area', count: 12 },
          { x: 80, y: 25, location: 'Q-9104 corner', count: 10 },
          { x: 25, y: 55, location: 'Q-9105 back', count: 6 },
          { x: 45, y: 60, location: 'Q-9106 workspace', count: 8 },
          { x: 65, y: 58, location: 'Q-9107 desks', count: 10 },
          { x: 85, y: 55, location: 'Q-9108 wall', count: 4 },
          { x: 50, y: 42, location: 'Central corridor', count: 6 },
        ],
        signalZones: [
          { x: 120, y: 90, radius: 65, strength: 'excellent', label: 'Excellent' },
          { x: 280, y: 100, radius: 70, strength: 'excellent', label: 'Excellent' },
          { x: 200, y: 220, radius: 45, strength: 'good', label: 'Good' },
        ],
      },
      {
        id: 'second',
        name: '2nd Floor',
        floorNumber: '2',
        rooms: ['Q-9201', 'Q-9202', 'Q-9203', 'Q-9204', 'Q-9205', 'Q-9206', 'Q-9207', 'Q-9208', 'Q-9209'],
        powerSockets: [
          { x: 22, y: 30, location: 'Q-9201 desks', count: 14 },
          { x: 38, y: 32, location: 'Q-9202 area', count: 10 },
          { x: 58, y: 28, location: 'Q-9203 tables', count: 12 },
          { x: 78, y: 30, location: 'Q-9204 carrels', count: 8 },
          { x: 28, y: 65, location: 'Q-9205 study', count: 10 },
          { x: 52, y: 68, location: 'Q-9206 reading', count: 12 },
          { x: 75, y: 65, location: 'Q-9207 zone', count: 8 },
          { x: 50, y: 45, location: 'Central tables', count: 10 },
        ],
        signalZones: [
          { x: 150, y: 100, radius: 70, strength: 'excellent', label: 'Excellent' },
          { x: 300, y: 120, radius: 50, strength: 'good', label: 'Good' },
          { x: 250, y: 220, radius: 55, strength: 'good', label: 'Good' },
        ],
      },
      {
        id: 'third',
        name: '3rd Floor',
        floorNumber: '3',
        rooms: ['Q-9301', 'Q-9302', 'Q-9303', 'Q-9304', 'Q-9305', 'Q-9306', 'Q-9307', 'Q-9308'],
        powerSockets: [
          { x: 24, y: 28, location: 'Q-9301 workbenches', count: 18 },
          { x: 42, y: 32, location: 'Q-9302 stations', count: 20 },
          { x: 62, y: 26, location: 'Q-9303 wall', count: 10 },
          { x: 82, y: 28, location: 'Q-9304 lab', count: 16 },
          { x: 30, y: 68, location: 'Q-9305 space', count: 8 },
          { x: 55, y: 70, location: 'Q-9306 project area', count: 12 },
          { x: 78, y: 72, location: 'Storage area', count: 4 },
        ],
        signalZones: [
          { x: 140, y: 95, radius: 68, strength: 'excellent', label: 'Excellent' },
          { x: 290, y: 110, radius: 58, strength: 'good', label: 'Good' },
          { x: 220, y: 215, radius: 52, strength: 'good', label: 'Good' },
        ],
      },
      {
        id: 'fourth',
        name: '4th Floor',
        floorNumber: '4',
        rooms: ['Q-9401', 'Q-9402', 'Q-9403', 'Q-9404', 'Q-9405', 'Q-9406', 'Q-9407', 'Q-9408'],
        powerSockets: [
          { x: 25, y: 24, location: 'Q-9401 front', count: 8 },
          { x: 42, y: 35, location: 'Q-9401 rows', count: 24 },
          { x: 60, y: 28, location: 'Q-9402 tables', count: 12 },
          { x: 78, y: 26, location: 'Q-9403 room', count: 14 },
          { x: 32, y: 66, location: 'Q-9404 counters', count: 10 },
          { x: 58, y: 70, location: 'Q-9405 desks', count: 6 },
          { x: 82, y: 68, location: 'Q-9406 office', count: 8 },
        ],
        signalZones: [
          { x: 130, y: 105, radius: 72, strength: 'excellent', label: 'Excellent' },
          { x: 285, y: 95, radius: 62, strength: 'excellent', label: 'Excellent' },
          { x: 210, y: 225, radius: 48, strength: 'weak', label: 'Weak' },
        ],
      },
      {
        id: 'fifth',
        name: '5th Floor',
        floorNumber: '5',
        rooms: ['Q-9501', 'Q-9502', 'Q-9503', 'Q-9504', 'Q-9505', 'Q-9506', 'Q-9507'],
        powerSockets: [
          { x: 28, y: 26, location: 'Q-9501 table', count: 16 },
          { x: 48, y: 30, location: 'Q-9502 desks', count: 12 },
          { x: 68, y: 26, location: 'Q-9503 walls', count: 8 },
          { x: 85, y: 28, location: 'Q-9504 conference', count: 14 },
          { x: 35, y: 70, location: 'Q-9505 lounge', count: 10 },
          { x: 60, y: 72, location: 'Pantry area', count: 6 },
        ],
        signalZones: [
          { x: 160, y: 100, radius: 75, strength: 'excellent', label: 'Excellent' },
          { x: 300, y: 100, radius: 55, strength: 'good', label: 'Good' },
          { x: 230, y: 230, radius: 50, strength: 'good', label: 'Good' },
        ],
      },
    ],
  },
  building5: {
    totalSockets: 285,
    totalSignalZones: 15,
    floors: [
      {
        id: 'first',
        name: '1st Floor - Canteen',
        floorNumber: '1',
        rooms: ['Main Dining Area', 'Seating Area A', 'Seating Area B', 'Seating Area C', 'Service Counter', 'Prep Area'],
        powerSockets: [
          { x: 20, y: 30, location: 'Q-5101 dining area', count: 12 },
          { x: 38, y: 35, location: 'Q-5102 seating', count: 16 },
          { x: 55, y: 55, location: 'Q-5103 tables', count: 14 },
          { x: 72, y: 38, location: 'Q-5104 dining right', count: 14 },
          { x: 85, y: 62, location: 'Q-5105 corner', count: 10 },
          { x: 28, y: 72, location: 'Q-5106 wall outlets', count: 8 },
          { x: 60, y: 25, location: 'Food counter area', count: 6 },
        ],
        signalZones: [
          { x: 120, y: 120, radius: 55, strength: 'good', label: 'Good' },
          { x: 280, y: 180, radius: 50, strength: 'good', label: 'Good' },
          { x: 60, y: 25, radius: 40, strength: 'weak', label: 'No Signal (Counter)' },
          { x: 300, y: 220, radius: 40, strength: 'excellent', label: 'Excellent' },
        ],
      },
      {
        id: 'second',
        name: '2nd Floor',
        floorNumber: '2',
        rooms: ['Q-5201', 'Q-5202', 'Q-5203', 'Q-5204', 'Q-5205', 'Q-5206', 'Q-5207', 'Q-5208', 'Q-5209'],
        powerSockets: [
          { x: 22, y: 28, location: 'Q-5201 desks', count: 16 },
          { x: 40, y: 32, location: 'Q-5202 tables', count: 20 },
          { x: 58, y: 28, location: 'Q-5203 walls', count: 10 },
          { x: 76, y: 30, location: 'Q-5204 study', count: 14 },
          { x: 26, y: 68, location: 'Q-5205 carrels', count: 12 },
          { x: 50, y: 72, location: 'Q-5206 center', count: 10 },
          { x: 75, y: 70, location: 'Q-5207 room', count: 8 },
          { x: 85, y: 75, location: 'Stairwell landing', count: 2 },
        ],
        signalZones: [
          { x: 140, y: 90, radius: 65, strength: 'excellent', label: 'Excellent' },
          { x: 280, y: 110, radius: 60, strength: 'good', label: 'Good' },
          { x: 200, y: 210, radius: 50, strength: 'good', label: 'Good' },
        ],
      },
      {
        id: 'third',
        name: '3rd Floor',
        floorNumber: '3',
        rooms: ['Q-5301', 'Q-5302', 'Q-5303', 'Q-5304', 'Q-5305', 'Q-5306', 'Q-5307', 'Q-5308'],
        powerSockets: [
          { x: 24, y: 30, location: 'Q-5301 benches', count: 22 },
          { x: 44, y: 32, location: 'Q-5302 benches', count: 22 },
          { x: 64, y: 28, location: 'Q-5303 room', count: 8 },
          { x: 82, y: 30, location: 'Q-5304 lab', count: 18 },
          { x: 28, y: 70, location: 'Q-5305 area', count: 4 },
          { x: 58, y: 72, location: 'Q-5306 workspace', count: 12 },
          { x: 82, y: 76, location: 'Emergency power', count: 2 },
        ],
        signalZones: [
          { x: 145, y: 105, radius: 68, strength: 'excellent', label: 'Excellent' },
          { x: 295, y: 100, radius: 56, strength: 'good', label: 'Good' },
          { x: 215, y: 218, radius: 52, strength: 'good', label: 'Good' },
          { x: 120, y: 200, radius: 42, strength: 'weak', label: 'Weak' },
        ],
      },
      {
        id: 'fourth',
        name: '4th Floor',
        floorNumber: '4',
        rooms: ['Q-5401', 'Q-5402', 'Q-5403', 'Q-5404', 'Q-5405', 'Q-5406', 'Q-5407', 'Q-5408'],
        powerSockets: [
          { x: 26, y: 28, location: 'Q-5401 stations', count: 16 },
          { x: 45, y: 32, location: 'Q-5402 tables', count: 14 },
          { x: 64, y: 30, location: 'Q-5403 pods', count: 12 },
          { x: 82, y: 28, location: 'Q-5404 innovation', count: 16 },
          { x: 32, y: 68, location: 'Q-5405 seating', count: 10 },
          { x: 58, y: 70, location: 'Q-5406 collab', count: 12 },
          { x: 78, y: 72, location: 'Corridor wall', count: 4 },
        ],
        signalZones: [
          { x: 135, y: 98, radius: 70, strength: 'excellent', label: 'Excellent' },
          { x: 285, y: 108, radius: 62, strength: 'excellent', label: 'Excellent' },
          { x: 205, y: 215, radius: 48, strength: 'good', label: 'Good' },
        ],
      },
      {
        id: 'fifth',
        name: '5th Floor',
        floorNumber: '5',
        rooms: ['Q-5501', 'Q-5502', 'Q-5503', 'Q-5504', 'Q-5505', 'Q-5506', 'Q-5507'],
        powerSockets: [
          { x: 28, y: 26, location: 'Q-5501 desks', count: 14 },
          { x: 48, y: 30, location: 'Q-5502 stations', count: 12 },
          { x: 68, y: 28, location: 'Q-5503 table', count: 16 },
          { x: 85, y: 26, location: 'Q-5504 board room', count: 18 },
          { x: 35, y: 72, location: 'Q-5505 workstation', count: 6 },
          { x: 84, y: 78, location: 'Server room', count: 8 },
        ],
        signalZones: [
          { x: 155, y: 102, radius: 72, strength: 'excellent', label: 'Excellent' },
          { x: 300, y: 105, radius: 58, strength: 'good', label: 'Good' },
          { x: 225, y: 225, radius: 50, strength: 'good', label: 'Good' },
        ],
      },
    ],
  },
};