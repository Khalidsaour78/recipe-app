import React, { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;
  const { login } = useContext(AuthContext);

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

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
        required
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
