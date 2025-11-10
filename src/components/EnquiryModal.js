import React, { useState } from 'react';
import './EnquiryModal.css';

export default function EnquiryModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');
  setSuccess('');

  // Google Sheets API endpoint (replace with your own)
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwKeLYT-Ym-Dnor1tZQogQUZ41nfZAyDc-6c8QrU9LAyBrEvSi1rFVObpz3gVN3gcXGww/exec';

  try {
    const res = await fetch(scriptURL, {
      method: 'POST',
      mode: 'cors', // 👈 ADD THIS LINE
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSuccess('Enquiry submitted successfully!');
      setForm({ name: '', email: '', phone: '' });
    } else {
      setError('Failed to submit. Please try again.');
    }
  } catch (err) {
    setError('Network error. Please try again.');
  }

  setLoading(false);
};


  return (
    <div className="enquiry-modal-overlay" onClick={onClose}>
      <div className="enquiry-modal" onClick={e => e.stopPropagation()}>
        <h2>Send Enquiry</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input name="name" type="text" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <label htmlFor="phone">Phone Number</label>
            <input name="phone" type="tel" value={form.phone} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="modal-actions">
            <button type="submit" className="submit-btn" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
        {success && <div className="modal-success">{success}</div>}
        {error && <div className="modal-error">{error}</div>}
      </div>
    </div>
  );
}
