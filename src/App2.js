import React, { useState } from "react";
import Navbar from "./Navbar";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSignup, setShowSignup] = useState(false);
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting username ${username} and password ${password}`);
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    console.log(
      `Submitting signup username ${signupUsername} and password ${signupPassword}`
    );
    const request = await fetch("/signup", {
      method: "POST",
      body: JSON.stringify({ signupUsername, signupPassword }),
      headers: {
        'Content-Type': "application/json",
      },
    });
    console.log("request", request);
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background:
      "url(https://static.vecteezy.com/system/resources/previews/005/266/448/original/retro-futuristic-background-free-vector.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: "3rem",
    borderRadius: "1rem",
    background: "#333",
    boxShadow: "0 0.5rem 1rem rgba(0,0,0,0.1)",
  };

  const signupStyle = {
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "3rem",
    borderRadius: "1rem",
    background: "#333",
    boxShadow: "0 0.5rem 1rem rgba(0,0,0,0.1)",
    marginTop: "2rem",
  };

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div style={containerStyle}>
      <Navbar />
      <div style={{ marginTop: "4rem" }}>
        <div style={formStyle}>
          <h2>Login Page</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <br />
            <button type="submit">Login</button>
          </form>
          <button onClick={toggleSignup}>Sign Up</button>
        </div>
        {showSignup && (
          <div style={signupStyle}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
              <label>
                Username:
                <input
                  type="text"
                  value={signupUsername}
                  onChange={(event) => setSignupUsername(event.target.value)}
                />
              </label>
              <br />
              <label>
                Password:
                <input
                  type="password"
                  value={signupPassword}
                  onChange={(event) => setSignupPassword(event.target.value)}
                />
              </label>
              <br />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
