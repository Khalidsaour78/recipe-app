import React, { useState, useContext } from "react"; // Import React, useState, and useContext from react
import AuthContext from "../../context/AuthContext"; // Import AuthContext from the context folder

const Login = () => {
  // Initialize user state with email and password fields
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Destructure email and password from the user state
  const { email, password } = user;
  // Get the login function from AuthContext
  const { login } = useContext(AuthContext);

  // Handle input changes and update the user state
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  // Handle form submission and call the login function
  const onSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Login</h1>
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        required // Mark the input as required
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        required // Mark the input as required
      />
      <button type="submit">Login</button> // Button to submit the form
    </form>
  );
};

export default Login; // Export the Login component
