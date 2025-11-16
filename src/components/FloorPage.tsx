import { useEffect, useState } from 'react';
import { ArrowLeft, Wifi, Zap, Info } from 'lucide-react';
import { FloorData } from '../data/buildingData';
import { InteractiveMap } from './InteractiveMap';
import { Button } from './ui/button';

interface FloorPageProps {
  building: 'building9' | 'building5';
  floor: FloorData;
  onBack: () => void;
  onLogout?: () => void;
  userEmail?: string | null;
}

export function FloorPage({ building, floor, onBack, onLogout, userEmail }: FloorPageProps) {
  const [showLegend, setShowLegend] = useState(false);
  const [selectedSocket, setSelectedSocket] = useState<number | null>(null);
  const [isPaid, setIsPaid] = useState<boolean>(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('mockPaid');
      setIsPaid(saved === 'true');
    } catch (e) {
      setIsPaid(false);
    }
  }, []);

  const handleUpgrade = () => {
    try {
      localStorage.setItem('mockPaid', 'true');
    } catch (e) {
      // ignore
    }
    setIsPaid(true);
  };

  const handleResetPurchase = () => {
    try {
      localStorage.removeItem('mockPaid');
    } catch (e) {
      // ignore
    }
    setIsPaid(false);
  };

  const buildingName = building === 'building9' ? 'Building 9' : 'Building 5';

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black sticky top-0 z-10 shadow-lg">
        <div className="px-4 py-4">
            <div className="flex items-center justify-between mb-2">
            <button
              onClick={onBack}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowLegend(!showLegend)}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Info className="w-5 h-5" />
                <span>Legend</span>
              </button>

              {/* Mock purchase control for documentation/testing */}
              {isPaid ? (
                <button
                  onClick={handleResetPurchase}
                  className="flex items-center gap-2 bg-black text-yellow-400 px-2 py-1 rounded hover:opacity-90"
                >
                  <span className="text-sm">Premium</span>
                </button>
              ) : (
                <button
                  onClick={handleUpgrade}
                  className="flex items-center gap-2 bg-yellow-400 text-black px-2 py-1 rounded hover:opacity-90"
                >
                  <span className="text-sm">Unlock Sockets $99</span>
                </button>
              )}

              {userEmail && <div className="text-sm text-black/80 px-2">{userEmail}</div>}
              {onLogout && (
                <button
                  onClick={onLogout}
                  className="text-sm bg-black text-yellow-400 px-2 py-1 rounded hover:opacity-90"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
          
          <div className="text-center">
            <h1 className="mb-1">{buildingName}</h1>
            <div className="text-lg">{floor.name}</div>
          </div>
        </div>
      </header>

      {/* Legend Overlay */}
      {showLegend && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-20 flex items-center justify-center p-6">
          <div className="bg-white text-black rounded-xl p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h2>Map Legend</h2>
              <button
                onClick={() => setShowLegend(false)}
                className="text-gray-500 hover:text-black text-2xl leading-none"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Wifi className="w-5 h-5 text-yellow-500" />
                  <span>Signal Strength Zones</span>
                </div>
                <div className="space-y-2 ml-7">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-green-700"></div>
                    <span className="text-sm">Excellent (4-5 bars)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-yellow-400 border-2 border-yellow-600"></div>
                    <span className="text-sm">Good (2-3 bars)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500 border-2 border-red-700"></div>
                    <span className="text-sm">Weak (0-1 bars)</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  <span>Power Socket Locations</span>
                </div>
                <div className="ml-7">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-black flex items-center justify-center">
                      <Zap className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-sm">Tap to see socket count</span>
                  </div>
                </div>
              </div>
            </div>

            <Button
              onClick={() => setShowLegend(false)}
              className="w-full mt-6 bg-yellow-400 text-black hover:bg-yellow-500"
            >
              Got it!
            </Button>
          </div>
        </div>
      )}

      {/* Stats Bar */}
      <div className="bg-white text-black px-4 py-4 grid grid-cols-2 gap-4">
        <div className="flex items-center justify-center gap-2 bg-gray-100 rounded-lg p-3">
          <Wifi className="w-5 h-5 text-yellow-500" />
          <div>
            <div className="text-sm text-gray-600">Signal Zones</div>
            <div>{floor.signalZones.length}</div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 bg-gray-100 rounded-lg p-3">
          <Zap className="w-5 h-5 text-yellow-500" />
          <div>
            <div className="text-sm text-gray-600">Power Sockets</div>
            <div>{floor.powerSockets.length} locations</div>
          </div>
        </div>
      </div>

      {/* Signal Strength Color Guide */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white px-4 py-3 border-y-2 border-yellow-400">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
            <span className="text-xs">Excellent</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-yellow-400 border-2 border-white"></div>
            <span className="text-xs">Good</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-white"></div>
            <span className="text-xs">Weak/No Signal</span>
          </div>
        </div>
      </div>

      {/* Interactive Map */}
      <div className="p-4">
        <InteractiveMap
          floor={floor}
          selectedSocket={selectedSocket}
          onSocketSelect={setSelectedSocket}
          isPaid={isPaid}
          onUpgrade={handleUpgrade}
        />
      </div>

      {/* Socket Details Panel */}
      {selectedSocket !== null && floor.powerSockets[selectedSocket] && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-yellow-400 to-yellow-500 text-black p-6 rounded-t-3xl shadow-2xl animate-in slide-in-from-bottom duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3>Power Socket Location</h3>
                <div className="text-sm opacity-80">
                  {floor.powerSockets[selectedSocket].location}
                </div>
              </div>
            </div>
            <button
              onClick={() => setSelectedSocket(null)}
              className="text-2xl leading-none hover:opacity-70"
            >
              ×
            </button>
          </div>
          
          <div className="bg-black text-white rounded-xl p-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-400 mb-1">Available Sockets</div>
                <div className="text-2xl text-yellow-400">
                  {floor.powerSockets[selectedSocket].count}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Type</div>
                <div className="text-lg">Standard</div>
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm opacity-80 text-center">
            Tap anywhere on the map to close
          </div>
        </div>
      )}
    </div>
  );
}