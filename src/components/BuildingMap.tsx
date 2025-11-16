import { useState } from 'react';
import { FloorSelector } from './FloorSelector';
import { MapView } from './MapView';
import { buildingData } from '../data/buildingData';

interface BuildingMapProps {
  building: 'building9' | 'building5';
}

export function BuildingMap({ building }: BuildingMapProps) {
  const floors = buildingData[building].floors;
  const [selectedFloor, setSelectedFloor] = useState(floors[0].id);

  const currentFloorData = floors.find(f => f.id === selectedFloor);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 bg-blue-50 border-b">
        <h2 className="mb-3">
          {building === 'building9' ? 'Building 9' : 'Building 5'}
        </h2>
        <FloorSelector
          floors={floors}
          selectedFloor={selectedFloor}
          onSelectFloor={setSelectedFloor}
        />
      </div>

      <div className="p-4">
        {currentFloorData && <MapView floorData={currentFloorData} />}
      </div>
    </div>
  );
}
