import React, { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;
  const { register } = useContext(AuthContext);

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

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
        required
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        required
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
