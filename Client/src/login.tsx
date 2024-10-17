import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Nav from './components/nav';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('https://fn-axiom-server.vercel.app/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      alert('Login successful!');
      navigate('/success'); 
    } else {
      alert(data.message || 'Login failed');
    }
  };

  return (
    <>
      <Nav />
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <form className="form" onSubmit={handleSubmit}>
          <div className="title">
            Welcome,<br />
            <span>Sign In to Continue</span>
          </div>
          <input
            className="input"
            name="email"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="input"
            name="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="flex flex-col gap-2">
            <span>Already Have an Account?</span>
            <a href="/login"><span className="text-orange-500">Sign In</span></a>
          </div>
          <button className="button-confirm">Let`s go →</button>
        </form>
      </div>
    </>
  );
}

export default Register;
