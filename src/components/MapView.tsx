import { Zap } from 'lucide-react';
import { FloorData } from '../data/buildingData';

interface MapViewProps {
  floorData: FloorData;
}

export function MapView({ floorData }: MapViewProps) {
  return (
    <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-lg border-2 border-gray-300 overflow-hidden">
      {/* Floor Layout Background */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
        {/* Rooms/Areas outline */}
        <rect x="10" y="10" width="380" height="280" fill="#f8f9fa" stroke="#dee2e6" strokeWidth="2" />
        
        {/* Interior walls */}
        <line x1="200" y1="10" x2="200" y2="290" stroke="#dee2e6" strokeWidth="2" />
        <line x1="10" y1="150" x2="390" y2="150" stroke="#dee2e6" strokeWidth="2" />
        
        {/* Signal Strength Zones */}
        {floorData.signalZones.map((zone, idx) => (
          <g key={idx}>
            <ellipse
              cx={zone.x}
              cy={zone.y}
              rx={zone.radius}
              ry={zone.radius}
              fill={
                zone.strength === 'excellent'
                  ? 'rgba(34, 197, 94, 0.3)'
                  : zone.strength === 'good'
                  ? 'rgba(234, 179, 8, 0.3)'
                  : 'rgba(239, 68, 68, 0.3)'
              }
              stroke={
                zone.strength === 'excellent'
                  ? '#22c55e'
                  : zone.strength === 'good'
                  ? '#eab308'
                  : '#ef4444'
              }
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <text
              x={zone.x}
              y={zone.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-xs"
              fill="#374151"
            >
              {zone.label}
            </text>
          </g>
        ))}
        
        {/* Room Labels */}
        <text x="100" y="75" textAnchor="middle" className="text-sm" fill="#6b7280">Room 101</text>
        <text x="100" y="225" textAnchor="middle" className="text-sm" fill="#6b7280">Room 102</text>
        <text x="300" y="75" textAnchor="middle" className="text-sm" fill="#6b7280">Room 103</text>
        <text x="300" y="225" textAnchor="middle" className="text-sm" fill="#6b7280">Corridor</text>
      </svg>

      {/* Power Socket Markers */}
      {floorData.powerSockets.map((socket, idx) => (
        <div
          key={idx}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${socket.x}%`,
            top: `${socket.y}%`,
          }}
        >
          <div className="relative group">
            <div className="bg-yellow-400 rounded-full p-2 shadow-lg border-2 border-yellow-600 cursor-pointer hover:scale-110 transition-transform">
              <Zap className="w-4 h-4 text-yellow-900" />
            </div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block z-10">
              <div className="bg-gray-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                {socket.location}
                <div className="text-gray-300">{socket.count} socket(s)</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
