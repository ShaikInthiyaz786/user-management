import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchUserById, updateUser } from "../services/api";
import UserForm from "../components/UserForm";

const EditUser = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserById(id)
      .then((data) => setFormData(data))
      .catch(() => alert("Failed to fetch user data!"));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(id, formData)
      .then(() => {
        alert("User updated successfully!");
        navigate("/");
      })
      .catch(() => alert("Failed to update user!"));
  };

  return (
    <div>
      <h2>Edit User</h2>
      <UserForm formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditUser;
