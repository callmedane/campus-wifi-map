import { useEffect, useState } from 'react';
import { HomePage } from './components/HomePage';
import { FloorPage } from './components/FloorPage';
import { LoginPage } from './components/LoginPage';
import { AboutPage } from './components/AboutPage';
import { buildingData } from './data/buildingData';

export type View = 'home' | 'floor' | 'about';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedBuilding, setSelectedBuilding] = useState<'building9' | 'building5'>('building9');
  const [selectedFloorId, setSelectedFloorId] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('isAuthenticated');
      setIsAuthenticated(saved === 'true');
      const savedEmail = localStorage.getItem('userEmail');
      setUserEmail(savedEmail || null);
    } catch (e) {
      setIsAuthenticated(false);
    }
  }, []);

  const handleFloorSelect = (building: 'building9' | 'building5', floorId: string) => {
    setSelectedBuilding(building);
    setSelectedFloorId(floorId);
    setCurrentView('floor');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  const handleOpenAbout = () => {
    setCurrentView('about');
  };

  const currentFloor = buildingData[selectedBuilding].floors.find(
    f => f.id === selectedFloorId
  );

  const handleLogin = (email: string) => {
    try {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', email);
    } catch (e) {
      // ignore
    }
    setIsAuthenticated(true);
    setUserEmail(email);
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('userEmail');
    } catch (e) {
      // ignore
    }
    setIsAuthenticated(false);
    setUserEmail(null);
  };

  return (
    <div className="min-h-screen bg-black">
      {!isAuthenticated ? (
        <LoginPage onLogin={handleLogin} />
      ) : currentView === 'home' ? (
        <HomePage onFloorSelect={handleFloorSelect} onLogout={handleLogout} userEmail={userEmail} onOpenAbout={handleOpenAbout} />
      ) : currentView === 'about' ? (
        <AboutPage onBack={() => setCurrentView('home')} />
      ) : currentFloor ? (
        <FloorPage
          building={selectedBuilding}
          floor={currentFloor!}
          onBack={handleBackToHome}
          onLogout={handleLogout}
          userEmail={userEmail}
        />
      ) : null}
    </div>
  );
}

export default App;
