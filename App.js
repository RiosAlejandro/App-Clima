import React from 'react';
import { ClimaProvider } from './src/context/ClimaProvider';
import Home from './src/Containers/Home';

function App() {

  return (
    <ClimaProvider>
      <Home />
    </ClimaProvider>
  );
}

export default App;
