import { Zap } from 'lucide-react';
import { FloorData } from '../data/buildingData';

interface InteractiveMapProps {
  floor: FloorData;
  selectedSocket: number | null;
  onSocketSelect: (index: number | null) => void;
  isPaid?: boolean; // whether the user has paid to unlock power socket locations
  onUpgrade?: () => void; // optional callback when user clicks upgrade
}

export function InteractiveMap({ floor, selectedSocket, onSocketSelect, isPaid = false, onUpgrade }: InteractiveMapProps) {
  return (
    <div 
      className="relative w-full aspect-[4/3] bg-white rounded-2xl border-4 border-yellow-400 overflow-hidden shadow-2xl"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onSocketSelect(null);
        }
      }}
    >
      {/* Floor Layout Background */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f3f4f6" strokeWidth="0.5"/>
          </pattern>
        </defs>
        
        {/* Grid Background */}
        <rect width="400" height="300" fill="url(#grid)" />
        
        {/* Main floor area */}
        <rect x="10" y="10" width="380" height="280" fill="#ffffff" stroke="#000000" strokeWidth="3" />
        
        {/* Interior walls */}
        <line x1="200" y1="10" x2="200" y2="290" stroke="#000000" strokeWidth="3" />
        <line x1="10" y1="150" x2="390" y2="150" stroke="#000000" strokeWidth="3" />
        
        {/* Doors */}
        <rect x="195" y="145" width="10" height="10" fill="#fbbf24" stroke="#000000" strokeWidth="1" />
        <rect x="95" y="145" width="10" height="10" fill="#fbbf24" stroke="#000000" strokeWidth="1" />
        <rect x="295" y="145" width="10" height="10" fill="#fbbf24" stroke="#000000" strokeWidth="1" />
        
        {/* Signal Strength Zones */}
        {floor.signalZones.map((zone, idx) => (
          <g key={idx}>
            <ellipse
              cx={zone.x}
              cy={zone.y}
              rx={zone.radius}
              ry={zone.radius}
              fill={
                zone.strength === 'excellent'
                  ? 'rgba(34, 197, 94, 0.25)'
                  : zone.strength === 'good'
                  ? 'rgba(251, 191, 36, 0.25)'
                  : 'rgba(239, 68, 68, 0.25)'
              }
              stroke={
                zone.strength === 'excellent'
                  ? '#22c55e'
                  : zone.strength === 'good'
                  ? '#fbbf24'
                  : '#ef4444'
              }
              strokeWidth="3"
              strokeDasharray="8,4"
            />
            <circle
              cx={zone.x}
              cy={zone.y}
              r="3"
              fill={
                zone.strength === 'excellent'
                  ? '#22c55e'
                  : zone.strength === 'good'
                  ? '#fbbf24'
                  : '#ef4444'
              }
            />
          </g>
        ))}
        
        {/* Room Labels */}
        <text x="100" y="75" textAnchor="middle" className="text-sm" fill="#000000" fontWeight="bold">
          {floor.rooms?.[0] || 'Room A'}
        </text>
        <text x="100" y="225" textAnchor="middle" className="text-sm" fill="#000000" fontWeight="bold">
          {floor.rooms?.[1] || 'Room B'}
        </text>
        <text x="300" y="75" textAnchor="middle" className="text-sm" fill="#000000" fontWeight="bold">
          {floor.rooms?.[2] || 'Room C'}
        </text>
        <text x="300" y="225" textAnchor="middle" className="text-sm" fill="#000000" fontWeight="bold">
          {floor.rooms?.[3] || 'Corridor'}
        </text>
      </svg>

      {/* Upgrade CTA when sockets are locked (basic plan) */}
      {!isPaid && (
        <div className="absolute inset-0 flex items-start justify-end p-4 pointer-events-none">
          <div className="bg-white/90 backdrop-blur-sm border rounded-lg p-3 shadow-lg text-sm pointer-events-auto">
            <div className="font-semibold">Premium — Unlock Power Sockets</div>
            <div className="text-xs text-gray-600">See power socket locations in the premium plan. Price: ₱99</div>
            <div className="mt-2 flex justify-end">
              <button
                onClick={(e) => { e.stopPropagation(); onUpgrade?.(); }}
                className="px-3 py-1 bg-yellow-400 text-black rounded-md font-medium"
              >
                Upgrade ₱99
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Power Socket Markers (hidden unless user has paid) */}
      {isPaid && floor.powerSockets.map((socket, idx) => (
        <button
          key={idx}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
          style={{
            left: `${socket.x}%`,
            top: `${socket.y}%`,
          }}
          onClick={(e) => {
            e.stopPropagation();
            onSocketSelect(idx === selectedSocket ? null : idx);
          }}
        >
          <div className={`relative transition-all duration-300 ${
            selectedSocket === idx ? 'scale-125' : 'hover:scale-110'
          }`}>
            <div className={`rounded-full p-2 shadow-lg border-2 cursor-pointer ${
              selectedSocket === idx
                ? 'bg-yellow-400 border-black animate-pulse'
                : 'bg-yellow-400 border-black'
            }`}>
              <Zap className="w-4 h-4 text-black" />
            </div>
            
            {/* Socket Count Badge */}
            <div className="absolute -top-1 -right-1 bg-black text-yellow-400 rounded-full w-5 h-5 flex items-center justify-center text-[10px] border-2 border-yellow-400">
              {socket.count}
            </div>

            {/* Pulse Animation when selected */}
            {selectedSocket === idx && (
              <div className="absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-75"></div>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}
