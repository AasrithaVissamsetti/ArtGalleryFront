import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Footer from './components/footer';
import CustomerLogin from './components/Custlogin';
import CustomerSignUp from './components/CustSignup';
import CustomerHome from './components/CustHome';
import ViewArtist from './components/viewArtists';
import ViewArtworks from './components/viewArtworks';
import UserProfile from './components/Profile';
import CuratorSignUp from './components/CuratorSignup';
import AboutUs from './components/Aboutus';
import ContactUs from './components/Contactus';
import CuratorLogin from './components/CuratorLogin';
import CuratorHome from './components/CuratorHome';
import ManageExhibitions from './components/ManageExhibitions';
import CuratorViewArtists from './components/CuViewArtists';
import ManageArtworks from './components/ManageArtworks';
import AdminSign from './components/AdminSignup';
import AdminLogin from './components/AdminLogin';
import AdminHome from './components/AdminHome';
import AdminUserManagement from './components/AdminUserManagement';
import ViewReports from './components/ViewReports';
import Exhibition from './components/Exhibition';
import AddToCart from './components/AddCart';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Custlogin" element={<CustomerLogin/>}/>
        <Route path="/CustSignup" element={<CustomerSignUp/>}/>
        <Route path="/CustHome" element={<CustomerHome/>}/>
        <Route path="/viewArtists" element={<ViewArtist/>}/>
        <Route path="/viewArtworks" element={<ViewArtworks/>}/>
        <Route path="/Profile" element={<UserProfile/>}/>
        <Route path="/CuratorSignup" element={<CuratorSignUp/>}/>
        <Route path="/Aboutus" element = {<AboutUs/>}/>
        <Route path="/Contactus" element={<ContactUs/>}/>
        <Route path="/CuratorLogin" element={<CuratorLogin/>}/>
        <Route path="/CuratorHome" element={<CuratorHome/>}/>
        <Route path="/ManageExhibitions" element={<ManageExhibitions/>}/>
        <Route path="/CuViewArtists" element={<CuratorViewArtists/>}/>
        <Route path="/ManageArtworks" element={<ManageArtworks/>}/>
        <Route path="/AdminSignup" element={<AdminSign/>}/>
        <Route path="/AdminLogin" element={<AdminLogin/>}/>
        <Route path="/AdminHome" element={<AdminHome/>}/>
        <Route path="/AdminUserManagement" element={<AdminUserManagement/>}/>
        <Route path="/ViewReports" element={<ViewReports/>}/>
        <Route path="/Exhibition" element={<Exhibition/>}/>
        <Route path="/AddCart" element={<AddToCart/>}/>

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;