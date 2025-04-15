import { data } from 'autoprefixer';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Simulate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

// Middleware to handle JSON requests
app.use(express.json());

// Serve JSON file
app.get('/api/data', (req, res) => {
  const dataPath = path.join(__dirname, 'data.json');

  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      res.status(500).send({ error: 'Failed to read data file' });
    } else {
      res.json(JSON.parse(data));
    }
  });
  res.send(data.json);
});

// Start the server
app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});
