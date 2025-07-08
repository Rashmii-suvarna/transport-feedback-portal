import React, { useEffect, useState } from 'react';

function AdminDashboard() {
  const [feedbackList, setFeedbackList] = useState([]);

  // Fetch feedback data
  useEffect(() => {
    fetch('http://localhost:5000/api/feedback')
      .then(res => res.json())
      .then(data => setFeedbackList(data))
      .catch(err => console.error('Error fetching feedback:', err));
  }, []);

  // Change status
  const markReviewed = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/api/feedback/${id}`, {
      method: 'PUT',
    });
    const updated = await res.json();

    // Update frontend state
    setFeedbackList(prev =>
      prev.map(fb => fb._id === id ? updated : fb)
    );
  } catch (err) {
    console.error('Failed to mark as reviewed:', err);
  }
};


  return (
    <div style={{ padding: '30px', maxWidth: '800px', margin: 'auto' }}>
      <h1>📋 Admin Dashboard – Transtalk</h1>
      {feedbackList.length === 0 ? (
        <p>No feedback yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {feedbackList.map((fb) => (
            <li key={fb._id} style={{ 
              background: '#f9f9f9', 
              padding: '15px', 
              marginBottom: '15px', 
              borderRadius: '10px', 
              boxShadow: '0 0 10px rgba(0,0,0,0.05)' 
            }}>
              <p><strong>Transport:</strong> {fb.transportType}</p>
              <p><strong>Route:</strong> {fb.routeNumber}</p>
              <p><strong>Feedback:</strong> {fb.feedbackText}</p>
              <p><strong>Status:</strong> 
                <span style={{ 
                  color: fb.status === 'new' ? 'red' : 'green', 
                  fontWeight: 'bold' 
                }}> {fb.status}</span>
              </p>
              {fb.status === 'new' && (
                <button onClick={() => markReviewed(fb._id)}>
                  Mark as Reviewed
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdminDashboard;
