import { Wifi, Zap } from 'lucide-react';

export function Legend() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="mb-3 flex items-center gap-2">
        <span>Legend</span>
      </h3>
      
      <div className="space-y-3">
        {/* Signal Strength */}
        <div>
          <div className="flex items-center gap-2 mb-2 text-sm text-gray-600">
            <Wifi className="w-4 h-4" />
            <span>Signal Strength</span>
          </div>
          <div className="space-y-2 ml-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-green-600"></div>
              <span className="text-sm">Excellent (4-5 bars)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-yellow-500 border-2 border-yellow-600"></div>
              <span className="text-sm">Good (2-3 bars)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-red-600"></div>
              <span className="text-sm">Weak (0-1 bars)</span>
            </div>
          </div>
        </div>

        {/* Power Sockets */}
        <div>
          <div className="flex items-center gap-2 mb-2 text-sm text-gray-600">
            <Zap className="w-4 h-4" />
            <span>Power Sockets</span>
          </div>
          <div className="ml-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-yellow-400 border-2 border-yellow-600 flex items-center justify-center">
                <Zap className="w-3 h-3 text-yellow-900" />
              </div>
              <span className="text-sm">Available socket location</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t text-xs text-gray-500">
        Tap on power socket icons to see details
      </div>
    </div>
  );
}
