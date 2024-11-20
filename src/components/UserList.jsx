import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUsers, deleteUser } from "../services/api";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (id) => {
    deleteUser(id)
      .then(() => {
        alert("User deleted successfully");
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch(() => alert("Failed to delete user"));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Link to={`/edit-user/${user.id}`}>Edit</Link>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
