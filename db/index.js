const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/hrla45-fullstack-review-1';

const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = db;