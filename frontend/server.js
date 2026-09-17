import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 4008;

app.use(express.static(path.join(__dirname, 'dist/spa')));

app.get('/*splat', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/spa', 'index.html'));
});

app.listen(PORT, () => console.log(`Quasar frontend running on port ${PORT}`));