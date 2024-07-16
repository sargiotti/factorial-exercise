'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const MetricChart = ({ newMetric }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Metric Values',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/metrics');
        const data = response.data;

        if (data && Array.isArray(data) && data.length > 0) {
          const labels = data.map(metric => new Date(metric.timestamp).toLocaleString());
          const values = data.map(metric => metric.value);

          setChartData({
            labels,
            datasets: [
              {
                label: 'Metric Values',
                data: values,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                pointHoverBorderWidth: 2,
              },
            ],
          });
        }
      } catch (err) {
        setError('Network error: Could not fetch metrics. Please try again later.');
        console.error('Error fetching metrics:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchMetrics();
  }, [newMetric]);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Metric Chart</h2>
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : chartData.labels.length === 0 ? (
        <p className="text-gray-500">No metrics yet</p>
      ) : (
        <Line data={chartData} />
      )}
    </div>
  );
};

export default MetricChart;
