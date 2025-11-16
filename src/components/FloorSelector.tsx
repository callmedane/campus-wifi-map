import { Button } from './ui/button';

interface Floor {
  id: string;
  name: string;
}

interface FloorSelectorProps {
  floors: Floor[];
  selectedFloor: string;
  onSelectFloor: (floorId: string) => void;
}

export function FloorSelector({ floors, selectedFloor, onSelectFloor }: FloorSelectorProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {floors.map((floor) => (
        <Button
          key={floor.id}
          variant={selectedFloor === floor.id ? 'default' : 'outline'}
          size="sm"
          onClick={() => onSelectFloor(floor.id)}
          className="whitespace-nowrap"
        >
          {floor.name}
        </Button>
      ))}
    </div>
  );
}
