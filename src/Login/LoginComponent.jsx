// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const LoginComponent = () => {
//   const [credentials, setCredentials] = useState({
//     username: '',
//     password: '',
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials({ ...credentials, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch('http://localhost:1234/farmer-list', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(credentials),
//     });

//     if (response.ok) {
//       sessionStorage.setItem('isAuthenticated', 'true'); // Optionally manage authentication state
//       navigate('/map'); // Redirect to the map component or another route upon successful login
//     } else {
//       const data = await response.json(); // Moved inside the else block
//       // Handle failed login attempt (e.g., by showing an error message)
//       alert('Login failed. Please check your username and password.');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="username"
//           value={credentials.username}
//           onChange={handleChange}
//           placeholder="Username"
//         />
//         <input
//           type="password"
//           name="password"
//           value={credentials.password}
//           onChange={handleChange}
//           placeholder="Password"
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginComponent;
