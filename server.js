const express = require('express');
const bodyParser = require('body-parser');
const usageRouter = require('./routes/usage');
const mongoose = require('mongoose');
const kafka = require('kafka-node');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use('/api/usage', usageRouter);

// Kafka Setup (Placeholder for real Kafka setup)
const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const producer = new kafka.Producer(client);

mongoose.connect('mongodb://localhost/telecom-billing', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});