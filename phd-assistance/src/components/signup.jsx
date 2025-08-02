import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';
import user_icon from './assets/person.png';
import email_icon from './assets/email.png';
import password_icon from './assets/password.png';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("📤 Sending signup request with data:", form);

      const res = await axios.post("/api/auth/signup", form);
      alert(res.data.msg);
    } catch (err) {
      alert(err.response?.data?.msg || err.message || 'Registration failed');

    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-heading">
        <h1>PhD Assistance</h1>
        <p>Empowering Knowledge, Enlightening Futures</p>
      </div>

      <form className="signup-box" onSubmit={handleSubmit}>
        <div className="header">
          <div className="text">Create Account</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="user" />
            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div className="input">
            <img src={email_icon} alt="email" />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="password" />
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>
        </div>

        <button type="submit" className="signup-btn">Sign Up</button>

        {/* <div className="or-divider">OR</div>

        <button type="button" className="google-btn">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
          Sign Up with Google
        </button> */}

        {/* <div className="login-link">
          {/* <p>Already have an account? <a href="#">Log In</a></p> */}
          {/* <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div> */} 
      </form>
    </div>
  );
};

export default Signup;
