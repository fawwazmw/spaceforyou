import { useState } from 'react';
import { NotificationProvider } from './contexts/NotificationContext';
import { Navigation } from './components/Navigation';
import { PetOrnaments } from './components/PetOrnaments';
import { Home } from './pages/Home';
import { Letters } from './pages/Letters';
import { Journal } from './pages/Journal';
import { ComfortCorner } from './pages/ComfortCorner';
import { MemoryGarden } from './pages/MemoryGarden';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'letters':
        return <Letters />;
      case 'journal':
        return <Journal />;
      case 'comfort':
        return <ComfortCorner />;
      case 'garden':
        return <MemoryGarden />;
      default:
        return <Home />;
    }
  };

  return (
    <NotificationProvider>
      <div className="app">
        <PetOrnaments />
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="main-content">{renderPage()}</main>
      </div>
    </NotificationProvider>
  );
}

export default App;
