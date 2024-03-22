import React, { useState } from 'react';

const RegistrationComponent = () => {
  const [user, setUser] = useState({
    farmerName: '', // Changed from username to match backend
    password: '', // Assuming you handle passwords separately since it's not in FarmerData class
    confirmPassword: '',
    cropCount: '', // Changed from ncpy to match backend, assuming this is what it represents
    email: '',
    farmerArea: '', // Changed from landArea to match backend
    phone: '',
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

    // Preparing data for the backend, excluding confirmPassword
    const formData = {
      ...user,
      farmerArea: parseInt(user.farmerArea, 10), // Ensure farmerArea is an integer
      cropCount: parseInt(user.cropCount, 10), // Ensure cropCount is an integer
      phone: parseInt(user.phone, 10), // Ensure phone is stored as a long in backend
    };
    delete formData.confirmPassword; // Remove confirmPassword as it's not needed for the backend

    const response = await fetch('http://localhost:1234/farmer-list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
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
      <h2>Farmer Registration Portal Welcomes You..</h2>
      <h4>Please Enter your details to get registered</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" name="farmerName" value={user.farmerName} onChange={handleChange} placeholder="Farmer Name" required />
        <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" required />
        <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} placeholder="Confirm Password" required />
        <input type="text" name="phone" value={user.phone} onChange={handleChange} placeholder="Mobile Number" />
        <input type="text" name="farmerArea" value={user.farmerArea} onChange={handleChange} placeholder="Land Area in acres" />
        <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" />
        <input type="text" name="cropCount" value={user.cropCount} onChange={handleChange} placeholder="Number of Crop Yields Per Year" />
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
