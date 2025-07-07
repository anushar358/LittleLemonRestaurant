import './App.css';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import BookingPage from './BookingPage';
import Chicago from './Chicago';
import CustomersSay from './Customerssay';
import HomePage from './HomePage';
import Specials from './Specials';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ConfirmedBooking from './ConfirmedBooking';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/bookingconfirmation" element={<ConfirmedBooking />}></Route>
          <Route path="/specials" element={<Specials />}></Route>
          <Route path="/customerssay" element={<CustomersSay />}></Route>
          <Route path="/chicago" element={<Chicago />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
   </div>
  );
}

export default App;
