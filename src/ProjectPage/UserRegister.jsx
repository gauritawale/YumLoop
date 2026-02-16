import React, { useState } from "react";

const UserRegister = () => {
  const [formData, setFormData] = useState({
     full_name: "",
    email: "",
    phone: "",
    password: "",
    role: "Customer",
    is_active: 1, // default
  });

  const roles = [
    { name: "Customer", desc: "Earn Loyalty Points" },
    { name: "Restaurant", desc: "Manage Orders" },
    { name: "Delivery Agent", desc: "Earn per Delivery" },
    { name: "Admin", desc: "System Control" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRoleSelect = (role) => {
    setFormData({ ...formData, role });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data...:",formData);

    //Send this data to backend api
  };

  return (
     <div className="auth-container">
      <div className="auth-card">

        {/* Header */}
        <div className="auth-header">
          <div className="logo-circle">Y</div>
          <h2>YumLoop</h2>
          <p>Authentication & Loyalty Engine</p>
        </div>

        {/* Toggle */}
        <div className="auth-toggle">
          <button type="button">Login</button>
          <button type="button" className="active">Sign Up</button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          {/* Full Name */}
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            value={formData.full_name}
            onChange={handleChange}
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <p className="role-title">I am a...</p>

          {/* Role Selection */}
          <div className="role-grid">
            {roles.map((r) => (
              <div
                key={r.name}
                className={`role-card ${
                  formData.role === r.name ? "selected" : ""
                }`}
                onClick={() => handleRoleSelect(r.name)}
              >
                <h4>{r.name}</h4>
                <span>{r.desc}</span>
              </div>
            ))}
          </div>

          <button className="submit-btn">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default UserRegister;
