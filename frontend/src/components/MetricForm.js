'use client';

import { useState } from 'react';
import axios from 'axios';

const MetricForm = ({ onMetricAdded }) => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    try {
      const response = await axios.post('http://localhost:3001/api/metrics', { name, value });
      setName('');
      setValue('');
      onMetricAdded(response.data);
    } catch (err) {
      setError('Network error: Could not connect to the server. Please try again later.');
      console.error('Error submitting metric:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Metric Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          className="border border-gray-300 p-2 rounded w-full text-gray-900"
        />
      </div>
      <div className="mb-4">
        <input 
          type="number" 
          placeholder="Value" 
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
          required 
          className="border border-gray-300 p-2 rounded w-full text-gray-900"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Metric
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </form>
  );
};

export default MetricForm;
