import { useState } from 'react';
import { Building2, Wifi, Zap, ChevronRight } from 'lucide-react';
import { buildingData } from '../data/buildingData';
import { Button } from './ui/button';

interface HomePageProps {
  onFloorSelect: (building: 'building9' | 'building5', floorId: string) => void;
  onLogout?: () => void;
  userEmail?: string | null;
  onOpenAbout?: () => void;
}

export function HomePage({ onFloorSelect, onLogout, userEmail, onOpenAbout }: HomePageProps) {
  const [selectedBuilding, setSelectedBuilding] = useState<'building9' | 'building5'>('building9');

  const currentBuilding = buildingData[selectedBuilding];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black">
        <div className="px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3 mb-2">
            <Wifi className="w-8 h-8" />
            <div>
              <h1 className="text-center">Campus Signal Mapper</h1>
              <p className="text-center text-sm">Find the best spots to study & charge</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {onOpenAbout && (
              <button
                onClick={onOpenAbout}
                className="text-sm bg-white/0 text-black px-3 py-1 rounded hover:opacity-90 border border-transparent hover:border-black/10"
              >
                About
              </button>
            )}
            {userEmail && <div className="text-sm text-black/80">{userEmail}</div>}
            {onLogout && (
              <button
                onClick={onLogout}
                className="text-sm bg-black text-yellow-400 px-3 py-1 rounded hover:opacity-90"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Building Selector */}
      <div className="px-6 py-8">
        <div className="bg-white rounded-xl p-6 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-6 h-6 text-yellow-500" />
            <h2 className="text-black">Select Building</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => setSelectedBuilding('building9')}
              className={`p-6 rounded-lg border-2 transition-all ${
                selectedBuilding === 'building9'
                  ? 'bg-yellow-400 border-yellow-500 text-black scale-105'
                  : 'bg-gray-100 border-gray-300 text-gray-700 hover:border-yellow-400'
              }`}
            >
              <div className="text-center">
                <Building2 className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold">Building 9</div>
                <div className="text-sm mt-1">5 Floors</div>
              </div>
            </button>
            
            <button
              onClick={() => setSelectedBuilding('building5')}
              className={`p-6 rounded-lg border-2 transition-all ${
                selectedBuilding === 'building5'
                  ? 'bg-yellow-400 border-yellow-500 text-black scale-105'
                  : 'bg-gray-100 border-gray-300 text-gray-700 hover:border-yellow-400'
              }`}
            >
              <div className="text-center">
                <Building2 className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold">Building 5</div>
                <div className="text-sm mt-1">5 Floors</div>
              </div>
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-yellow-600 mb-1">
                <Wifi className="w-5 h-5" />
                <span className="text-sm text-gray-600">Signal Zones</span>
              </div>
              <div className="text-2xl text-black">{currentBuilding.totalSignalZones}</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-yellow-600 mb-1">
                <Zap className="w-5 h-5" />
                <span className="text-sm text-gray-600">Power Sockets</span>
              </div>
              <div className="text-2xl text-black">{currentBuilding.totalSockets}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floor List */}
      <div className="px-6 pb-8">
        <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
          <div className="bg-yellow-400 px-6 py-4 border-b-4 border-yellow-500">
            <h2 className="text-black">Select Floor</h2>
          </div>
          
          <div className="divide-y divide-gray-200">
            {currentBuilding.floors.map((floor) => (
              <button
                key={floor.id}
                onClick={() => onFloorSelect(selectedBuilding, floor.id)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-yellow-50 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                    <span className="text-xl">{floor.floorNumber}</span>
                  </div>
                  <div className="text-left">
                    <div className="text-black">{floor.name}</div>
                    <div className="text-sm text-gray-600">
                      {floor.powerSockets.length} socket locations • {floor.signalZones.length} signal zones
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-yellow-500 group-hover:translate-x-1 transition-transform" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="px-6 pb-8">
        <div className="bg-white rounded-xl p-6 shadow-2xl">
          <h3 className="text-black mb-4">How to Use</h3>
          
          <div className="space-y-4 text-black">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                <span>1</span>
              </div>
              <div>
                <div>Select your building above</div>
                <div className="text-sm text-gray-600">Choose between Building 5 or Building 9</div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                <span>2</span>
              </div>
              <div>
                <div>Tap on a floor to view its map</div>
                <div className="text-sm text-gray-600">Each floor shows signal strength and power outlets</div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                <span>3</span>
              </div>
              <div>
                <div>Tap power sockets for details</div>
                <div className="text-sm text-gray-600">See how many outlets are available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}