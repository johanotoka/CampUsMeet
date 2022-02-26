import React, { useState } from 'react';
import './App.css';
// eslint-disable-next-line
import CalendarApp from './calendar';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

import WeekCalendar from 'react-week-calendar';
import 'react-week-calendar/dist/style.css';



function App() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <WeekCalendar onChange={onChange} value={value} />
    </div>
  );
}

export default App;

