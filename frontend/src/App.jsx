import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import BottomNav from './components/BottomNav';
import MigraineLogWizard from './components/wizard/MigraineLogWizard';

function App() {
  const [showWizard, setShowWizard] = useState(false);

  return (
    <div className="container">
      {showWizard && <MigraineLogWizard onClose={() => setShowWizard(false)} />}

      <header style={{
        padding: '20px 24px',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: '17px',
        position: 'sticky',
        top: 0,
        background: 'var(--color-bg)',
        zIndex: 10,
        paddingTop: '60px' /* Status bar space simulation */
      }}>
        Dashboard
      </header>

      <main style={{ padding: '0 24px' }}>
        <Dashboard />
      </main>

      <BottomNav onFabClick={() => setShowWizard(true)} />
    </div>
  );
}

export default App;
