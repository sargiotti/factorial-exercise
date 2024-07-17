'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

const MetricTimeline = ({ newMetric }) => {
  const [metrics, setMetrics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/metrics');
        setMetrics(response.data);
      } catch (err) {
        setError('Network error: Could not fetch metrics. Please try again later.');
        console.error('Error fetching metrics:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchMetrics();
  }, [newMetric]);

  const toggleSortOrder = () => {
    setIsAscending(!isAscending);
  };

  const sortedMetrics = [...metrics].sort((a, b) => {
    return isAscending 
      ? new Date(a.timestamp) - new Date(b.timestamp) 
      : new Date(b.timestamp) - new Date(a.timestamp);
  });

  return (
    <div className="mb-8 text-black">
      <h2 className="text-2xl font-bold mb-4">Metric Timeline</h2>
      <button
        onClick={toggleSortOrder}
        className="mb-4 p-2 bg-[#e51943] text-white rounded"
      >
        {isAscending ? 'Sort Descending' : 'Sort Ascending'}
      </button>
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : metrics.length === 0 ? (
        <p className="text-gray-500">No metrics yet</p>
      ) : (
        <ul className="list-disc pl-5">
          {sortedMetrics.map(metric => (
            <li key={metric.id} className="mb-2">
              {new Date(metric.timestamp).toLocaleString()}: {metric.name} - {metric.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MetricTimeline;
