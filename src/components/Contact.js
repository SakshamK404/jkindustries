// src/components/Contact.js
import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [name, setName]     = useState('');
  const [mobile, setMobile] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending…');

    try {
      const response = await axios.post('http://localhost:5000/send-sms', {
        name,
        mobile
      });
      console.log('API response:', response.data);
      setStatus('Submitted successfully!');
      setName('');
      setMobile('');
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('Submission failed');
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Get in touch</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md"
        >
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-1">
              Name *
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent"
            />
          </div>
          {/* Mobile */}
          <div className="mb-4">
            <label htmlFor="mobile" className="block text-gray-700 mb-1">
              Mobile Number *
            </label>
            <input
              id="mobile"
              type="tel"
              value={mobile}
              onChange={e => setMobile(e.target.value)}
              required
              placeholder="e.g. 8275019040"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent"
            />
          </div>
          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500 transition"
          >
            Submit
          </button>
          {/* Status message */}
          {status && (
            <p className="mt-4 text-center text-gray-700">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
