import React from "react";
import { useState } from "react";

const Login = ({ setAuthored }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === "omenapupu") {
      setAuthored(true);
    } else {
      setError("väärä salasana :(");
    }
  };

  return (
    <div className="login-display">
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" />
      </form>
      {error}
    </div>
  );
};

export default Login;
