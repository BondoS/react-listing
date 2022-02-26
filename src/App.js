import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HotelAdmin from './pages/admin/hotel';
import Room from './pages/admin/room';
import Admin from './pages/admin/main';
import Home from './pages/public/home';
import Hotel from './pages/public/hotel';
import Confirm from './pages/public/confirm';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/hotel/' element={<Hotel />} />
          <Route path='/admin/hotel/' element={<HotelAdmin />} />
          <Route path='/admin/room/' element={<Room />} />
          <Route path='/admin/' element={<Admin />} />
          <Route path='/confirm/' element={<Confirm />} />
          <Route
            render={() => (
              <h2 style={{ textAlign: 'center' }} className='notFound'>
                404 Page Not Found
              </h2>
            )}
          />
        </Routes>
      </div>
    </Router>
    // <div>shit</div>
  );
}

export default App;
