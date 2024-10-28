import React from 'react';
import WeatherSummary from './components/WeatherSummary';
import AlertNotification from './components/AlertNotification';

function App() {
  return (
    <div className="App">
      <WeatherSummary />
      <AlertNotification />
    </div>
  );
}

export default App;
