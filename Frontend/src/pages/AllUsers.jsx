
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './allUser.css';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState({ name: "", gender: "" });

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("https://task-website-bandhanam.vercel.app/api/users", { params: filter });
      setUsers(res.data);
    };
    fetchUsers();
  }, [filter]);

  return (
    <div className="all">
        <div id="heading">
          <h3>Search The Profile... :)</h3>
        </div>
      
      <br />

      <div className="filters">
        <input
          placeholder="Search by name"
          onChange={e => setFilter({ ...filter, name: e.target.value })}
        />
        <select
          onChange={e => setFilter({ ...filter, gender: e.target.value })}
        >
          <option value="">All</option>
          <option value="Bride">Bride</option>
          <option value="Groom">Groom</option>
        </select>
      </div>

      <div className="users-grid">
        {users.map(user => (
          <Link to={`/users/${user._id}`} key={user._id}>
          
            <div className="user-card">
              {user.name} - {user.gender}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
