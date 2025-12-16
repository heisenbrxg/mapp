import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import BottomNav from './components/BottomNav';
import MigraineLogWizard from './components/wizard/MigraineLogWizard';
import CalendarView from './components/CalendarView';

function App() {
  const [showWizard, setShowWizard] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard' or 'calendar'

  return (
    <div className="container">
      {showWizard && <MigraineLogWizard onClose={() => setShowWizard(false)} />}

      {currentView === 'dashboard' && (
        <header style={{
          padding: '20px 24px',
          textAlign: 'center',
          fontWeight: '700',
          fontSize: '17px',
          position: 'sticky',
          top: 0,
          background: 'var(--color-bg)',
          zIndex: 10,
          paddingTop: '60px'
        }}>
          Dashboard
        </header>
      )}

      <main style={{ padding: '0 24px', paddingBottom: '100px' }}>
        {currentView === 'dashboard' ? <Dashboard /> : <CalendarView />}
      </main>

      <BottomNav
        activeTab={currentView}
        onTabChange={setCurrentView}
        onFabClick={() => setShowWizard(true)}
      />
    </div>
  );
}

export default App;
