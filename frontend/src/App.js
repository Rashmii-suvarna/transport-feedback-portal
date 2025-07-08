import React, { useState } from 'react';
import AdminDashboard from './AdminDashboard';
import './App.css';

function App() {
  const [view, setView] = useState('login');
  const [adminPass, setAdminPass] = useState('');
  const [formData, setFormData] = useState({
    transportType: '',
    routeNumber: '',
    feedbackText: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      await res.json();
      alert('✅ Feedback submitted!');
      setFormData({ transportType: '', routeNumber: '', feedbackText: '' });
    } catch (err) {
      alert('❌ Submission failed');
      console.error(err);
    }
  };

  return (
    <div className="app-container">

      {view === 'login' && (
        <div className="login-container">
          <h1 className="login-title"> Welcome to <span className="brand">Transtalk</span></h1>
          <p className="login-quote">Where every voice matters</p>
          <p className="login-subtitle">Choose your role to continue</p>

          <div className="login-buttons">
            <button className="role-button user" onClick={() => setView('user')}>
               User
            </button>
            <button className="role-button admin" onClick={() => setView('admin-pass')}>
               Admin
            </button>
          </div>
        </div>
      )}

      {view === 'admin-pass' && (
        <div className="admin-login-container">
          <h2>🔐 Admin Login</h2>
          <input
            type="password"
            placeholder="Enter Admin Password"
            value={adminPass}
            onChange={(e) => setAdminPass(e.target.value)}
            className="admin-password-input"
          />
          <div className="admin-button-group">
            <button
              onClick={() => {
                if (adminPass === 'admin123') {
                  setView('admin');
                } else {
                  alert('❌ Incorrect Password');
                }
              }}
              className="login-button"
            >
              Login
            </button>
            <button onClick={() => setView('login')} className="back-button">
              🔙 Back
            </button>
          </div>
        </div>
      )}

      {view === 'user' && (
        <div className="feedback-container">
          <h1 className="title"> Transtalk</h1>
          <p className="subtitle">Have something to say about your ride? Tell us.</p>
          <form onSubmit={handleSubmit} className="feedback-form">
            <label>Transport Type:</label>
            <select
              name="transportType"
              value={formData.transportType}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="bus">Bus</option>
              <option value="train">Train</option>
              <option value="metro">Metro</option>
            </select>

            <label>Route Number:</label>
            <input
              type="text"
              name="routeNumber"
              value={formData.routeNumber}
              onChange={handleChange}
              required
            />

            <label>Feedback:</label>
            <textarea
              name="feedbackText"
              value={formData.feedbackText}
              onChange={handleChange}
              required
            />

            <button type="submit" className="submit-button">Submit Feedback</button>
          </form>

          <div className="back-login">
            <button onClick={() => setView('login')}>🔙 Back to Login</button>
          </div>
        </div>
      )}

      {view === 'admin' && (
        <div className="admin-wrapper">
          <div className="admin-header">
            <button className="logout-button" onClick={() => setView('login')}>
              🔓 Logout Admin
            </button>
          </div>
          <AdminDashboard />
        </div>
      )}
    </div>
  );
}

export default App;
