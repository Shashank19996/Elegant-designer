const app = require('./_server');

module.exports = (req, res) => {
  // Apply Express middleware to the serverless function
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  return app(req, res);
};
