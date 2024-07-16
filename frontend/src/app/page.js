'use client';

import { useState } from 'react';
import MetricForm from '../components/MetricForm';
import MetricTimeline from '../components/MetricTimeLine';
import MetricChart from '../components/MetricChart';
import MetricAverages from '@/components/MetricAverages';
import './globals.css';

const Home = () => {
  const [newMetric, setNewMetric] = useState(null);

  const handleMetricAdded = (metric) => {
    setNewMetric(metric);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Metrics App</h1>
      <MetricForm onMetricAdded={handleMetricAdded} />
      <MetricTimeline newMetric={newMetric} />
      <MetricChart newMetric={newMetric} />
      <MetricAverages />
    </div>
  );
};

export default Home;

