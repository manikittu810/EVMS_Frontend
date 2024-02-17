import React, { useState } from 'react';

const RegistrationComponent = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
    landArea: '',
    email: '',
    ncpy: '',
    region: '',
    waterResource: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (user.password !== user.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Clear any previous error
    setError('');

    // Replace with your actual backend endpoint
    const response = await fetch('http://localhost:1234/farmer-list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password, // Ensure your backend handles password securely
        // Include other user fields as necessary
        mobileNumber: user.mobileNumber,
        landArea: user.landArea,
        email: user.email,
        ncpy: user.npy,
        region: user.region,
        waterResource: user.waterResource,
      }),
    });

    if (!response.ok) {
      // Handle server errors or invalid input
      alert('Registration failed');
      return;
    }

    // Handle successful registration (e.g., redirecting to login page)
    alert('Registration successful');
  };

  return (
    <div>
      <h2>Farmer Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={user.username} onChange={handleChange} placeholder="Username" required />
        <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" required />
        <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} placeholder="Confirm Password" required />
        {/* Other input fields remain the same */}
        <input type="text" name="mobileNumber" value={user.mobileNumber} onChange={handleChange} placeholder="Mobile Number" />
        <input type="text" name="landArea" value={user.landArea} onChange={handleChange} placeholder="Land Area" />
        <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" />
        <input type="text" name="ncpy" value={user.npy} onChange={handleChange} placeholder="NCPY" />
        <input type="text" name="region" value={user.region} onChange={handleChange} placeholder="Region" />
        <select name="waterResource" value={user.waterResource} onChange={handleChange}>
        <option value="">Select Water Resource</option>
          <option value="WELL">Well</option>
          <option value="BOREWELL">Borewell</option>
          <option value="RIVER">River</option>
          <option value="LAKE">Lake</option>
          <option value="POND">Pond</option>
          <option value="RAINWATER">Rainwater</option>
          <option value="NONE">None</option>
        </select>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationComponent;
