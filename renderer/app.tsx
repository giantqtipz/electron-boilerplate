import React from 'react';
import { Main } from './components/index';

const App: React.FC = () => {
  // calling IPC exposed from preload script
  window.electron.testMessage('testMessage', 'IPC Success');
  return (
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  );
};

export default App;
