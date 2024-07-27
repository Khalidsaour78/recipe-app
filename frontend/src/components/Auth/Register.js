import React, { useState, useContext } from "react"; // Import React, useState, and useContext from react
import AuthContext from "../../context/AuthContext"; // Import AuthContext from the context folder

const Register = () => {
  // Initialize user state with name, email, and password fields
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Destructure name, email, and password from the user state
  const { name, email, password } = user;
  // Get the register function from AuthContext
  const { register } = useContext(AuthContext);

  // Handle input changes and update the user state
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  // Handle form submission and call the register function
  const onSubmit = (e) => {
    e.preventDefault();
    register({ name, email, password });
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        required // Mark the input as required
      />
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
      <button type="submit">Register</button> // Button to submit the form
    </form>
  );
};

export default Register; // Export the Register component
