import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const excludeWeekends = date => {
  const day = date.getDay();
  return day !== 0 && day !== 6;
};

const DateInput = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      minDate={new Date()}
      filterDate={excludeWeekends}
    />
  );
};

export default DateInput;



{/* <input 
  type="date" 
  placeholder='date' 
  onChange={(e)=>setDate(e.target.value)} 
  min={getNextWeekday()} 
  max={getNextWeekday(5)} 
  required 
  pattern="\d{4}-\d{2}-\d{2}" 
/>

function getNextWeekday(dayOffset = 0) {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0: Sunday, 1: Monday, etc.
  const daysUntilNextWeekday = (7 - dayOfWeek + dayOffset) % 7; // Calculate the number of days until the next weekday (default is Monday)
  const nextWeekday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + daysUntilNextWeekday);
  
  // If the next weekday is a Saturday or Sunday, add another day until we reach a weekday
  if (nextWeekday.getDay() === 0) { // Sunday
    nextWeekday.setDate(nextWeekday.getDate() + 1);
  } else if (nextWeekday.getDay() === 6) { // Saturday
    nextWeekday.setDate(nextWeekday.getDate() + 2);
  }
  
  return nextWeekday.toISOString().split('T')[0];
}


 */}
