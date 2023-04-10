import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bookDataService from '../Services/BookServices';
import { toast } from 'react-toastify';

function Apoiment() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [date, setDate] = useState();
  const [slot, setSlot] = useState();
  const [age, setAge] = useState();
  const [address, setAddress] = useState();
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedDate = new Date(date);
    const isWeekend = selectedDate.getDay() === 6 || selectedDate.getDay() === 0;
    const isPastDate = selectedDate < new Date();
    if (isWeekend || isPastDate) {
      toast.error('Please Select Date Between Monday to Friday', {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    const newBook = {
      name,
      age,
      address,
      slot,
      date,
      phone,
      message,
      email,
    };

    try {
      await bookDataService.addBooks(newBook);
      toast.success('Successfully booked appointment', {
        position: toast.POSITION.TOP_CENTER,
      });

      navigate('/slot');
    } catch (error) {
      toast.error('Please fill in all the fields', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className='box'>
      <form className='form' onSubmit={handleSubmit}>
        <input type='name' placeholder='Name' onChange={(e) => setName(e.target.value)} required />
        <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />
        <input type='phone' placeholder='Mobile no.' onChange={(e) => setPhone(e.target.value)} required />
        <input
          type='date'
          placeholder='Date'
          onChange={(e) => setDate(e.target.value)}
          min={new Date().toISOString().split('T')[0]}
          required
        />
        <input type='slot' placeholder='Morning or Evening' onChange={(e) => setSlot(e.target.value)} required/>
        <input type='age' id='select' placeholder='Age' onChange={(e) => setAge(e.target.value)} required/>
        <input type='address' placeholder='Address' onChange={(e) => setAddress(e.target.value)} required/>
        <input type='message' placeholder='Message' onChange={(e) => setMessage(e.target.value)} required/>
        <button className='button'>Submit</button>
      </form>
    </div>
  );
}

export default Apoiment;
