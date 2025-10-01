
import React, { useEffect, useState } from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import './userProfile.css'

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:5000/api/users/${id}`);
      setUser(res.data);
    };
    fetchUser();
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="userProfile">
    <div  className="info">
      <h1 id="name">{user.name}</h1>
      <p>Gender: {user.gender}</p>
      <p>Age: {user.age}</p>
      <p>Contact: {user.contact}</p>
      <p>Email: {user.email}</p>
      <p>Discription: {user.discrip}</p>
      <br />

      <div id="link">
        <a href={`https://wa.me/?text=Check%20out%20${window.location.href}`} target="_blank"> <u> Share on WhatsApp </u> <FaWhatsapp style={{ color: "green", fontSize: "30px" }} /></a>
        <br />
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank"><u>Share on Facebook</u> <FaFacebook style={{ fontSize: "30px"}}/></a>
      </div>
      

      <Helmet>
        <title>{user.name}</title>
        <meta name="description" content={`Profile of ${user.name}, ${user.age} years old ${user.gender}`} />
        <meta property="og:title" content={user.name} />
        <meta property="og:description" content={`Profile of ${user.name}, ${user.age} years old ${user.gender}`} />
        <meta property="og:image" content={user.profilePic} />
        <meta property="og:url" content={window.location.href} />
</Helmet>
    </div>
    </div>
  );
};

export default UserProfile;
