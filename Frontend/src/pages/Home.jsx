
import React from "react";
import { Link } from "react-router-dom";
import Middle from "../components/Middle";
import About from "../components/About";
import "./home.css";

const Home = () => {
  return (
    <div className="page">
    <div className="home">
       <div className="home-content">
        <h1>Find Your Soulmate❤️</h1>
      <p>
        Bandhanam, Where Love Meets Tradition ! 
      </p> 
      
      <div className="home-buttons">
        <Link to="/register" className="btn">
          Register Now
        </Link>
        <Link to="/users" className="btn btn-outline">
          View All Users
        </Link>
      </div>
       </div>
      
    </div>
    <Middle/>
    <About/>
    </div>
  );
};

export default Home;
