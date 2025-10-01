
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SideImage from "../assets/registrationform_image.jpg"
import './register.css'

const Register = () => {
  const [form, setForm] = useState({ name: "", gender: "", age: "", contact: "", email: "", discrip: "" });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/users/register", form);
    navigate("/users");
  };

  return (
    <div className="registraion">
      <div className="container">
      <div>
        <img src={SideImage} alt="" />
      </div>
      
      <div>
      <form onSubmit={handleSubmit}>
      <h3 id="formhead">Registration </h3>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <select name="gender" onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="Bride">Female</option>
        <option value="Groom">Male</option>
      </select>
      <input name="age" placeholder="Age" type="number" onChange={handleChange} />
      <input name="contact" placeholder="Contact" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <textarea name="discrip" id="discrip" placeholder="Enter the discription about you" rows={4} cols={65} onChange={handleChange}></textarea>
      <button type="submit">Register</button>
    </form>
      </div>
    
    </div>
    </div>
    
    
  );
};

export default Register;
