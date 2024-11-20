import React from "react";

const UserForm = ({ formData, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name || ""}
        onChange={onChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email || ""}
        onChange={onChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
