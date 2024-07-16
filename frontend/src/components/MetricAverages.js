'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

const MetricAverages = () => {
  const [averages, setAverages] = useState({
    day: null,
    hour: null,
    minute: null,
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/metrics');
        const data = response.data;

        if (data && Array.isArray(data)) {
          const dayAverage = calculateAverage(data, 'day');
          const hourAverage = calculateAverage(data, 'hour');
          const minuteAverage = calculateAverage(data, 'minute');

          setAverages({ day: dayAverage, hour: hourAverage, minute: minuteAverage });
        }
      } catch (err) {
        setError('Error fetching metrics. Please try again later.');
        console.error('Error fetching metrics:', err);
      }
    };

    fetchMetrics();
  }, []);

  const calculateAverage = (data, unit) => {
    const values = data.map(metric => {
      const date = new Date(metric.timestamp);
      if (unit === 'day') return date.getDate();
      if (unit === 'hour') return date.getHours();
      if (unit === 'minute') return date.getMinutes();
      return null;
    }).filter(value => value !== null);

    const sum = values.reduce((acc, value) => acc + value, 0);
    return values.length ? sum / values.length : null;
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Metric Load Averages</h2>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div>
          <p>Average Day: {averages.day !== null ? averages.day.toFixed(0) : 'N/A'}</p>
          <p>Average Hour: {averages.hour !== null ? averages.hour.toFixed(2) : 'N/A'}</p>
          <p>Average Minute: {averages.minute !== null ? averages.minute.toFixed(2) : 'N/A'}</p>
        </div>
      )}
    </div>
  );
};

export default MetricAverages;
