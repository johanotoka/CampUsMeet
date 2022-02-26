import React, { useState } from 'react';
import './App.css';
// eslint-disable-next-line
import CalendarApp from './calendar';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


function App() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default App;

