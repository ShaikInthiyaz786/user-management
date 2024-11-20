import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../services/api";
import UserForm from "../components/UserForm";

const AddUser = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(formData)
      .then(() => {
        alert("User added successfully!");
        navigate("/");
      })
      .catch(() => alert("Failed to add user!"));
  };

  return (
    <div>
      <h2>Add User</h2>
      <UserForm formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
};

export default AddUser;
