import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Home from './pages/Home';
import UserTable from './pages/UserTable';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLogin from './pages/AdminLogin';
import Slot from './pages/Slot';
import Apoiment from './pages/Apoiment';
import Edit from './pages/Edit';
import { useState } from 'react';

function App() {
  const [bookId, setBookId] = useState();

  const getBookIdHandler = (id) => {
    // console.log('the id is edited: ', id);
    setBookId(id);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/apoiment" element={<Apoiment />} />
        <Route path="/slot" element={<Slot />} />
        <Route path="/edit" element={<Edit id={bookId} setBookId={setBookId} />} />
        <Route path="/usertable" element={<UserTable getBookId={getBookIdHandler} />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
