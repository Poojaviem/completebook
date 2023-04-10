import React, { useState, useEffect } from 'react';
import bookDataService from '../Services/BookServices';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

function Edit({ id, setBookId }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const navigate =useNavigate()

 
  const editHandler = async () => {
    try {
      const docSnap = await bookDataService.getBook(id);
      setName(docSnap.data().name);
      setEmail(docSnap.data().email);
      setSlot(docSnap.data().slot);
      setDate(docSnap.data().date);
      setAddress(docSnap.data().address);
      setMessage(docSnap.data().message);
      setPhone(docSnap.data().phone);
      setAge(docSnap.data().age);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id !== undefined && id !== '') {
      editHandler();
    }
  }, [id]);

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

    try {
      const bookData = {
        name,
        email,
        phone,
        date,
        slot,
        age,
        address,
        message,
      };

      try {
        if (id !== undefined && id !== '') {
          await bookDataService.updateBook(id ,bookData);
        toast.success('Successfully updated', {
          position: toast.POSITION.TOP_CENTER,
        });
        navigate('/usertable');
        }else{
          toast.error('something went wrong', {
            position: toast.POSITION.TOP_CENTER,
          }); 
        }
      }  catch (error) {
        toast.error('Please fill in all the fields', {
          position: toast.POSITION.TOP_CENTER,
        });
      }

      if (id !== undefined && id !== '') {
        await bookDataService.updateBook(id, bookData);
        setBookId('');
      }
    } catch (error) {
      console.log(error);
    }
  
  };
  const handleclick=()=>{
    setBookId(id)
  }

  return (
    <div className='box'>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='name'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='phone'
          placeholder='Mobile no.'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type='date'
          placeholder='Date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={new Date().toISOString().split('T')[0]}
          required
        />
        <input
          type='slot'
          placeholder='Morning or Evening'
          value={slot}
          onChange={(e) => setSlot(e.target.value)}
          required
        />
        <input
          type='age'
          id='select'
          placeholder='Age'
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <input
          type='address'
          placeholder='Address'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
       <input
          type='message'
          placeholder='Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
          <button className='button' onClick={(e)=>handleclick()} >Edit</button>
      
        </form>
        </div>
        );
}

export default Edit;
