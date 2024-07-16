
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Metric, initDB } = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

initDB();

app.post('/api/metrics', async (req, res) => {
  const { name, value } = req.body;
  const metric = await Metric.create({ name, value });
  res.json(metric);
});

app.get('/api/metrics', async (req, res) => {
  const metrics = await Metric.findAll();
  res.json(metrics);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
