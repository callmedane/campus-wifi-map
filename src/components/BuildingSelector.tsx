import { Button } from './ui/button';
import { Building2 } from 'lucide-react';

interface BuildingSelectorProps {
  selectedBuilding: 'building9' | 'building5';
  onSelectBuilding: (building: 'building9' | 'building5') => void;
}

export function BuildingSelector({ selectedBuilding, onSelectBuilding }: BuildingSelectorProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center gap-2 mb-3">
        <Building2 className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg">Select Building</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <Button
          variant={selectedBuilding === 'building9' ? 'default' : 'outline'}
          onClick={() => onSelectBuilding('building9')}
          className="w-full"
        >
          Building 9
        </Button>
        <Button
          variant={selectedBuilding === 'building5' ? 'default' : 'outline'}
          onClick={() => onSelectBuilding('building5')}
          className="w-full"
        >
          Building 5
        </Button>
      </div>
    </div>
  );
}
