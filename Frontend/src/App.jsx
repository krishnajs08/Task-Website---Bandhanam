
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Register from "./pages/Register";
import AllUsers from "./pages/AllUsers";
import UserProfile from "./pages/UserProfile";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<AllUsers />} />
        <Route path="/users/:id" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
